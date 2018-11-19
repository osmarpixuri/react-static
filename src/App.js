import React from "react";
import { Router } from "react-static";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
  }
  body {
    text-align: center;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  </React.Fragment>
);

export default hot(module)(App);
