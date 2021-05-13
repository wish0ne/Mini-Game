import "./home.css";
import { Link } from "react-router-dom";

function Template({ location, history }) {
  return (
    <div className="Home">
      <Link to="/tile">
        <div className="Home-2048">2048</div>
      </Link>
      <div className="Home-Tetris">Tetris</div>
      <div className="Home-Minesweeper">Minesweeper</div>
      <div className="Home-Card">Card</div>
    </div>
  );
}

export default Template;
