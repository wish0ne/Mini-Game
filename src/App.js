import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import Tile from "./2048/2048";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/tile" component={Tile} />
      </Router>
    </>
  );
}

export default App;
