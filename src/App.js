import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDom from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login";
import Text from "./Components/Text/Text";
import Textranslation from "./Components/Textranslation/Textranslation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Languages from "./Components/Languages/languages";
import BeatO1 from "./Components/BeatO(Icon)V/BeatO1";
import BeatO2 from "./Components/BeatO(Icon)V/BeatO2";
import BeatO3 from "./Components/BeatO(Icon)V/BeatO3";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Login} exact />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/text" component={Text} />
        <Route path="/textranslation" component={Textranslation} />
        <Route path="/languages" component={Languages} />
        <Route path="/BeatO1" component={BeatO1} />
        <Route path="/BeatO2" component={BeatO2} />
        <Route path="/BeatO3" component={BeatO3} />
      </div>
    </Router>
  );
}

export default App;
