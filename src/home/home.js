import "./home.css";
import { Link } from "react-router-dom";

function Template() {
  return (
    <div className="Home">
      <h1 className="Home-Title">🎮React Mini Game🎮</h1>
      <Link to="/card">
        <div className="Home-Menu Home-Card">🃏Card Flip🃏</div>
      </Link>
      <div className="Home-Menu Home-2048">개발중..</div>
    </div>
  );
}

export default Template;
