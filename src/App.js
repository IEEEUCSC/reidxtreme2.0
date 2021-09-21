import React from "react";

// React Router
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Components
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";

// Style
import "./styles.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
};

export default App;
