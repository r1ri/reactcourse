import React, { Component } from "react";
import Movies from "./components/movies.jsx";
import { Route, Link, Switch } from "react-router-dom";
import Counters from "./components/counters"

export default class Vidly extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul>
            <li>
              <Link to="/movies">home</Link>
            </li>
            <li>
              <Link to="">Movies</Link>
            </li>
            <li>
              <Link>Customers</Link>
            </li>
            <li>
              <Link>Rentals</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/counters" component={Counters} />
            <Route path="/movies" component={Movies} />
            <Route path="/movies" component={Movies} />
          </Switch>
        </div>
      </div>
    );
  }
}
