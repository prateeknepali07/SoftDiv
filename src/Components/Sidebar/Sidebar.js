import React, { Component } from "react";
import "./main.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* <div>
            {" "}
            {this.state.on && <h1>ToggleMe</h1>}
            <a className="waves-effect waves-light btn" onClick={this.toggle}>
              Add Language
            </a>
            <a onclick="M.toast({html: 'I am a toast'})" className="btn">
              Toast!
            </a>
          </div>
          <h1>hello</h1>
        </div> */}
        <ul
          className="sidenav sidenav-fixed row"
          style={{ marginLeft: "1080px", marginTop: "70px" }}
        >
          <li>
            <form className="col s12 ">
              <a href="#!">English</a>
              <div className="row">
                <div className="input-field">
                  <textarea id="textarea1" className="materialize-textarea" />
                  <label for="textarea1">Textarea</label>
                </div>
              </div>
            </form>
          </li>
          <li>
            <form className="col s12 ">
              <a href="#!">Tamil</a>
              <div className="row">
                <div className="input-field">
                  <textarea id="textarea1" className="materialize-textarea" />
                  <label for="textarea1">Textarea</label>
                </div>
              </div>
            </form>
          </li>
          <li>
            <form className="col s12">
              <a href="#!">Gujrati</a>
              <div className="row">
                <div className="input-field">
                  <textarea id="textarea1" className="materialize-textarea" />
                  <label for="textarea1">Textarea</label>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}
