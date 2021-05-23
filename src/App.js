import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import Card from "./card/Card.js";
import Snake from "./Snake/Snake.js";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={Card} />
        <Route path="/snake" component={Snake} />
      </Router>
    </>
  );
}

export default App;
