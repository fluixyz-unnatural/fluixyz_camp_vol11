import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/header";
import Work from "./components/work";
import TechNode from "./components/techNode";
import DirectedGraph from "./components/directedGraph";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Home from "./components/home";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/tech-node" component={TechNode} />
      <Route exact path="/graph" component={DirectedGraph} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
