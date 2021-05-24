import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./card.css";

const emoji_list = [
  "●",
  "●",
  "☺",
  "☺",
  "☀",
  "☀",
  "♣",
  "♣",
  "♘",
  "♘",
  "♪",
  "♪",
  "♧",
  "♧",
  "★",
  "★",
  "☁",
  "☁",
  "♔",
  "♔",
];

const selected = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Card() {
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);

  const popup = useRef();

  const All_flip = () => {
    const all = document.querySelectorAll(".Card-back");
    all.forEach((ele) => {
      ele.classList.add("front");
      ele.innerHTML = "?";
    });
  };

  if (start) {
    shuffle(emoji_list);
    setTimeout(All_flip, 2000);
    setStart(false);
  }

  const flip = (e, num) => {
    if (e.target.classList.contains("front")) {
      e.target.classList.toggle("front");
      if (e.target.classList[1] === "front") {
        e.target.innerHTML = "?";
      } else {
        e.target.innerHTML = emoji_list[num - 1];
      }
      selected.push(e.target);
      if (selected.length === 2) {
        if (selected[0].innerHTML === selected[1].innerHTML) {
          selected.forEach((ele) => {
            setTimeout(() => {
              ele.classList.add("hidden");
            }, 700);
          });
          selected.pop();
          selected.pop();
          setScore(score + 10);
          setCorrect(correct + 2);
        } else {
          selected.forEach((ele) => {
            setTimeout(() => {
              ele.classList.toggle("front");
              ele.innerHTML = "?";
            }, 1000);
          });
          selected.pop();
          selected.pop();
          setScore(score - 5);
        }
      }
    }
  };

  const CardList = (number) =>
    number.map((num) => {
      return (
        <td key={num} className="Card-back" onClick={(e) => flip(e, num)}>
          {emoji_list[num - 1]}
        </td>
      );
    });

  if (correct === 20) {
    popup.current.classList.remove("hidden");
  }

  const restart = () => {
    setCorrect(0);
    setScore(0);
    setStart(true);
    const all = document.querySelectorAll(".Card-back.hidden");
    all.forEach((ele) => {
      ele.classList.remove("hidden");
    });
    popup.current.classList.add("hidden");
  };

  return (
    <div className="Card">
      <div className="Card-board">
        <table>
          <tbody>
            <tr>{CardList([1, 2, 3, 4, 5])}</tr>
            <tr>{CardList([6, 7, 8, 9, 10])}</tr>
            <tr>{CardList([11, 12, 13, 14, 15])}</tr>
            <tr>{CardList([16, 17, 18, 19, 20])}</tr>
          </tbody>
        </table>
      </div>
      <Link to="/">
        <button className="Card-button">Back</button>
      </Link>
      <div className="Card-score">
        Score
        <div>{score}</div>
      </div>
      <div className="Card-popup hidden" ref={popup}>
        <div className="Card-popup_layer">
          <div className="Card-text_area">
            GAME OVER
            <div className="Card-popup-score"> Score:{score}</div>
          </div>
          <div className="Card-btn_area">
            <div className="Card-restart" onClick={restart}>
              RESTART
            </div>
            <Link to="/">
              <div className="Card-exit">EXIT</div>
            </Link>
          </div>
        </div>
        <div className="Card-popup_dimmed"></div>
      </div>
    </div>
  );
}

export default Card;
