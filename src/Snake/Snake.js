import "./Snake.css";
import { Link } from "react-router-dom";
import { useState } from "react";

let board = [];
for (let i = 0; i < 20; i++) {
  board.push([]);
  for (let j = 0; j < 20; j++) {
    board[i].push(0);
  }
}

function Snake() {
  const [boards, setBoards] = useState(board);
  const [position, setPosition] = useState([{ x: 0, y: 0 }]);

  const makeBoard = boards.map((row, index) => {
    return (
      <tr key={index} className="Snake-Row">
        {row.map((cell, index) => {
          return (
            <td key={index} className="Snake-Cell">
              0
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <div className="Snake">
      <table className="Snake-Board">
        <tbody>{makeBoard}</tbody>
      </table>
      <Link to="/">
        <button className="Snake-button">🔙Back</button>
      </Link>
    </div>
  );
}
export default Snake;
