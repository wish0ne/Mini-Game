import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import Card from "./card/card.js";
import Snake from "./Snake/Snake.js";
import { introPath } from "./constant";

function App() {
  return (
    <>
      <Router>
        <Route path={introPath + "/"} exact component={Home} />
        <Route path={introPath + "/card"} component={Card} />
        <Route path={introPath + "/snake"} component={Snake} />
      </Router>
    </>
  );
}

export default App;
