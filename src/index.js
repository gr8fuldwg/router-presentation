import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./index.css"
import App from "./App";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Dogs from "./dogs";
import Cats from "./cats";
import Notfound from "./notfound";
import ItemDetail from "./ItemDetail";

const routing = (
  <Router>
    <div>
      <nav className="Nav ">
        <ul className="nav-links">
          <li>
            <NavLink exact className="text-white" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="/dogs">
              Dogs
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="/cats">
              Cats
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dogs" exact component={Dogs} />
        <Route path="/cats" component={Cats} />
        <Route path="/dogs/:id" component={ItemDetail}/>
        <Route path="*" component={() => "404 NOT FOUND"} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
