import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Button } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Work from "./components/work";
import Highlight from "./components/highlight";
import TechNode from "./components/techNode";
import DirectedGraph from "./components/directedGraph";
import D3test from "./components/d3test"
import SignUp from "./components/signup"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <a href="/">root</a> | <a href="/work">work</a> |{" "}
        <a href="/highlight">highlight</a> |<a href="/tech-node">tech-node</a> |
        <a href="/graph">graph</a> | <a href="/test">test</a> | <a href="/signup">signup</a>
      </div>
      <Route exact path="/">
        <Button>click me</Button>
      </Route>
      <Route exact path="/work" component={Work} />
      <Route exact path="/tech-node" component={TechNode} />
      <Route exact path="/highlight" component={Highlight} />
      <Route exact path="/graph" component={DirectedGraph} />
      <Route exact path="/test" component={D3test} />
      <Route exact path="/signup" component={SignUp} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
