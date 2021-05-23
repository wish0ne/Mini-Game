import "./home.css";
import { Link } from "react-router-dom";

function Template() {
  return (
    <div className="Home">
      <h1 className="Home-Title">🎮React Mini Game🎮</h1>
      <Link to="/card">
        <div className="Home-Menu Home-Card">Card Matching</div>
      </Link>
      <Link to="/snake">
        <div className="Home-Menu Home-Snake">Snake Game</div>
      </Link>
    </div>
  );
}

export default Template;
