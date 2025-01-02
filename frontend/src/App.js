import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Favourites from "./components/favourites.js";
import Search from "./components/search.js";
import Navigation from "./components/navigation.js";

const App = () => {
  return (
    <div id="App">
      <Router>
        <Navigation />
        {/* Route to render Search and Favourites component on the root path */}
        <Switch>
          <Route exact={true} path="/" component={Search} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
