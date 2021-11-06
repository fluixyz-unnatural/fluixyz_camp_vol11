import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SiteHeader from "./components/header";
import Work from "./components/work";
import TechNode from "./components/techNode";
import DirectedGraph from "./components/directedGraph";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Home from "./components/home";
import Post from "./components/post";
import Footer from "./components/footer"
import Gate from "./components/gates/gate"
import LanguageView from "./components/gates/languageView";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <SiteHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/tech-node" component={TechNode} />
      <Route exact path="/graph" component={DirectedGraph} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/post" component={Post} />
      <Route path="/gate" component={Gate} />
      <Footer />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
