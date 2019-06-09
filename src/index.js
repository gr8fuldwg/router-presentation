import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dogs from './dogs';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="active" to="/dogs">
                    Dogs!
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/dogs" component={Dogs} />
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));


