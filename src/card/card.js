import { Link } from "react-router-dom";
import { useEffect } from "react";
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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function All_flip() {
  const all = document.querySelectorAll(".Card-back");
  all.forEach((ele) => {
    ele.classList.toggle("front");
    if (ele.classList[1] === "front") ele.innerHTML = "🟦";
  });
}

function Card() {
  shuffle(emoji_list);
  useEffect(() => setTimeout(All_flip, 2000));

  const flip = (e, num) => {
    e.target.classList.toggle("front");
    if (e.target.classList[1] === "front") {
      e.target.innerHTML = "🟦";
    } else {
      e.target.innerHTML = emoji_list[num - 1];
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
      <div className="Card-score">Score</div>
    </>
  );
}

export default Card;
