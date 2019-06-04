import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default class Header extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="black">
          <div class="nav-wrapper container ">
            <a href="#" class="brand-logo">
              <img src="https://beatoapp.com/wp-content/uploads/2018/01/Logo.png" />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
