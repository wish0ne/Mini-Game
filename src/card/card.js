import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./card.css";

const emoji_list = [
  "🧡",
  "🧡",
  "💛",
  "💛",
  "💚",
  "💚",
  "💙",
  "💙",
  "💜",
  "💜",
  "🤎",
  "🤎",
  "🖤",
  "🖤",
  "🤍",
  "🤍",
  "💗",
  "💗",
  "💕",
  "💕",
];

const selected = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// function All_flip() {
//   const all = document.querySelectorAll(".Card-back");
//   all.forEach((ele) => {
//     ele.classList.toggle("front");
//     if (ele.classList[1] === "front") ele.innerHTML = "❔";
//   });
// }

function Card(props) {
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);

  const All_flip = () => {
    const all = document.querySelectorAll(".Card-back");
    all.forEach((ele) => {
      ele.classList.add("front");
      ele.innerHTML = "❔";
    });
  };

  if (start) {
    shuffle(emoji_list);
    setTimeout(All_flip, 2000);
    setStart(false);
  }

  const flip = (e, num) => {
    e.target.classList.toggle("front");
    if (e.target.classList[1] === "front") {
      e.target.innerHTML = "❔";
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
        console.log(correct);
      } else {
        selected.forEach((ele) => {
          setTimeout(() => {
            ele.classList.toggle("front");
            ele.innerHTML = "❔";
          }, 1000);
        });
        selected.pop();
        selected.pop();
        setScore(score - 5);
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
    console.log("end");
  }

  return (
    <>
      <div className="Card">
        <table>
          <tr>{CardList([1, 2, 3, 4, 5])}</tr>
          <tr>{CardList([6, 7, 8, 9, 10])}</tr>
          <tr>{CardList([11, 12, 13, 14, 15])}</tr>
          <tr>{CardList([16, 17, 18, 19, 20])}</tr>
        </table>
      </div>
      <Link to="/">
        <button className="Card-button">뒤로가기</button>
      </Link>
      <div className="Card-score">
        Score
        <div>{score}</div>
      </div>
    </>
  );
}

export default Card;
