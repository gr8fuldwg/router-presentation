import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">What is React Router?</h1>
      <h2>
        React Router v4+ Dynamic Routing rendering components instead of entire
        page
      </h2>

      <ul className="section1">
        <h3>Configuration:</h3>
      </ul>

      <ul className="section2">
        <li>create-react-app</li>
        <li>npx install react-router-dom</li>
        <li>npm start</li>
        <li>wrap elements in 'Router'</li>
        <li>Route path = "/pageName"</li>
        <li>Link wraps around nav-links to enable their dynamic-functionality as different routes</li>
      </ul>

      <h1>Examples:</h1>
      <ul className="App mr-3">
        <li>
          <a href="https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0">
            React Router with page Transitions
          </a>
        </li>
        <li>
          <a href="https://reacttraining.com/react-router/web/example/auth-workflow">
            authentication/workflow
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
