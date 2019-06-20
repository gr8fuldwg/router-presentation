// Import React (JavaScript) library for basic usage
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./App.css";
import App from "./App";

// Configure React Router by importing API components from react-router-dom
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

//Render components from different pages
import Dogs from "./dogs";
import Cats from "./cats";
import ItemDetail from "./ItemDetail";
import Notfound from "./notfound";

// REDIRECT & AUTHENTICATION //

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   };
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }));
//     });
//   };
//   render() {
//     const { redirectToReferrer } = this.state;
//     const { from } = this.props.location.state || { from: { pathname: "/" } };

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />;
//     }
//     return (
//       <div>
//         <p>You must login to view this page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const AuthButton = () => (
//   fakeAuth.isAuthenticated === true ?
//     <p>
//       Welcome! <button onClick={() => ({})}>Sign Out</button>
//     </p>
//    :
//     <p>You are not logged in.</p>
//   )

// 'ROUTER' provides routing functionality
const routing = (
  <Router>
    <div>
      {/* <AuthButton /> */}
      <nav className="Nav ">
        <h3 className="logo text-white">Logo</h3>
        <ul className="nav-links">
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
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

      {/* <Route exact path="/public" component={Public} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} /> */}

      {/* RENDERS OUT COMPONENT BASED ON URL */}
      {/* Switch only renders out route with specific path and ignores other components */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dogs" exact component={Dogs} />
        <Route path="/cats" component={Cats} />
        <Route path="/dogs/:id" component={ItemDetail} />
        <Route path="*" component={() => "404 NOT FOUND :/"} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
