import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default class Text extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Text</h1>
        <div className="col s5 pull-s7">
          <Sidebar />
        </div>
      </div>
    );
  }
}
