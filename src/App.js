import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import Card from "./card/card.js";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={Card} />
      </Router>
    </>
  );
}

export default App;
