import "./home.css";
import { Link } from "react-router-dom";

function Template() {
  return (
    <div className="Home">
      <h1 className="Home-Title">
        React
        <br /> Mini Game
      </h1>
      <div className="Home-Menu">
        <Link to="/card">
          <div className="Home-Card">Card Matching</div>
        </Link>
        <Link to="/snake">
          <div className="Home-Snake">Snake Game</div>
        </Link>
      </div>
    </div>
  );
}

export default Template;
