import { Component } from "react";
import "./App.css";
import Mentoring from "./Mentoring";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/sciencementoring" component={Mentoring} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
