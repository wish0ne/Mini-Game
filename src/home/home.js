import "./home.css";
import { Link } from "react-router-dom";

function Template() {
  return (
    <div className="Home">
      <Link to="/card">
        <div className="Home-Card">카드 뒤집기 게임</div>
      </Link>
      <div className="Home-Tetris">개발중..</div>
      <div className="Home-Minesweeper">개발중..</div>
      <div className="Home-2048">개발중..</div>
    </div>
  );
}

export default Template;
