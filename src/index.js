import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink className="active" to="/"/>
                    Home
                </li>
            </ul>
            <hr />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));


