import React, { Component } from "react";
import Header from "../Header/Header";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Header />
        <ul
          className="sidenav sidenav-fixed"
          id="mobile-demo"
          style={{
            marginTop: "65px",
            padding: "0px",
            width: window.innerWidth > 990 ? "16%" : "250px"
          }}
        >
          <li className="col s12" style={{ padding: "0px" }}>
            <a href="" className="col s12">
              &nbsp;&nbsp;&nbsp;BeatO(icon)V
            </a>
            <a href="/Dashboard" className="col s12">
              &nbsp;&nbsp;&nbsp;Dashboard
            </a>
            <a href="/languages" className="col s12">
              &nbsp;&nbsp;&nbsp;Languages
            </a>
            <a href="/text" className="col s12">
              &nbsp;&nbsp;&nbsp;Texts
            </a>
            <a href="/textranslation" className="col s12">
              &nbsp;&nbsp;&nbsp;Text-Translation
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
