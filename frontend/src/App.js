import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Favourites from './components/favourites.js';
import Search from './components/search.js';
import Navigation from './components/navigation.js';

/**
 * We have imported the Navigation, Search and Favourites components in this App.js file.
 * React Router is used to enable navigation between the Home and Favourites menu items using the Router, Route and Switch components.
 *  This allows the user to get redirected based on the specific route path ("/"  and "/Favourites").
 */

const App = () => {
  return (
    <div id="App">
      <Router>
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          ></link>
          <Navigation />
          <Switch>
            <Route exact={true} path="/" component={Search} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

/**
 * The App class has been exported to display Navigation, Search and Favourites components.
 * This is done when the App.js file is imported and used in Index.js.
 */
export default App;
