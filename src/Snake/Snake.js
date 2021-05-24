import "./Snake.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Snake() {
  let board = [];
  for (let i = 0; i < 30; i++) {
    board.push([]);
    for (let j = 0; j < 30; j++) {
      board[i].push("none");
    }
  }

  const randomPosition = () => {
    const rPosition = {
      x: Math.floor(Math.random() * 30),
      y: Math.floor(Math.random() * 30),
    };
    return rPosition;
  };

  const [boards, setBoards] = useState(board);
  const [position, setPosition] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState("right");
  const [food, setFood] = useState(randomPosition);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  const popup = useRef();

  const makeBoard = boards.map((row, index) => {
    return (
      <tr key={index} className="Snake-Row">
        {row.map((cell, index) => {
          switch (cell) {
            case "none":
              return <td key={index} className="Snake-Cell"></td>;
            case "snake":
              return <td key={index} className="Snake-Cell snake"></td>;
            case "food":
              return <td key={index} className="Snake-Cell food"></td>;
            default:
              return <td></td>;
          }
        })}
      </tr>
    );
  });

  const displaySnake = () => {
    const newBoards = board;
    position.forEach((cell) => {
      newBoards[cell.x][cell.y] = "snake";
    });
    newBoards[food.x][food.y] = "food";

    setBoards(newBoards);
  };

  const changeDirection = (e) => {
    if (e.key === "ArrowRight") {
      setDirection("right");
    } else if (e.key === "ArrowLeft") {
      setDirection("left");
    } else if (e.key === "ArrowUp") {
      setDirection("up");
    } else if (e.key === "ArrowDown") {
      setDirection("down");
    }
  };

  window.addEventListener("keydown", changeDirection);

  const moveSnake = () => {
    const newSnake = [];
    if (direction === "right") {
      newSnake.push({ x: position[0].x, y: (position[0].y + 1) % 30 });
    } else if (direction === "left") {
      newSnake.push({ x: position[0].x, y: (position[0].y - 1 + 30) % 30 });
    } else if (direction === "up") {
      newSnake.push({ x: (position[0].x - 1 + 30) % 30, y: position[0].y });
    } else if (direction === "down") {
      newSnake.push({ x: (position[0].x + 1) % 30, y: position[0].y });
    }

    position.forEach((cell) => {
      newSnake.push(cell);
    });

    for (let i = 1; i < newSnake.length; i++) {
      if (newSnake[0].x === newSnake[i].x && newSnake[0].y === newSnake[i].y) {
        setEnd(true);
        setTimeout(gameOver, 500);
      }
    }

    if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
      setFood(randomPosition);
      setScore(score + 10);
    } else {
      newSnake.pop();
    }
    setPosition(newSnake);
    displaySnake();
  };

  useInterval(moveSnake);

  function useInterval(callback) {
    const time = 100;
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      if (!end) {
        let timer = setInterval(() => {
          savedCallback.current();
        }, time);
        return () => clearInterval(timer);
      }
    }, []);
  }

  const gameOver = () => {
    popup.current.classList.remove("hidden");
  };

  return (
    <div className="Snake">
      <table className="Snake-Board">
        <tbody>{makeBoard}</tbody>
      </table>
      <div className="Snake-Score">
        <div>Score</div>
        {score}
      </div>
      <Link to="/">
        <button className="Snake-button">Back</button>
      </Link>
      <div className="Snake-popup hidden" ref={popup}>
        <div className="Snake-popup_layer">
          <div className="Snake-text_area">
            GAME OVER
            <div className="Snake-popup-score">Score : {score}</div>
          </div>
          <div className="Snake-btn_area">
            <Link to="/">
              <div className="Snake-exit">EXIT</div>
            </Link>
          </div>
        </div>
        <div className="Snake-popup_dimmed"></div>
      </div>
    </div>
  );
}
export default Snake;
