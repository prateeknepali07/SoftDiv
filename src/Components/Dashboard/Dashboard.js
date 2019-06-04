import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";
import Sidebar from "../Sidebar/Sidebar";

class Dashboard extends Component {
  componentDidMount() {
    window.M.AutoInit();
  }
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col s12 m10 offset-m1 l7 offset-l2">
            <blockquote style={{ display: "inline-block" }}>
              Add your language
            </blockquote>
            <a
              class="waves-effect waves-light btn right"
              style={{ marginTop: "10px" }}
            >
              Add Language
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "20px"
              }}
            >
              <a class="btn disabled">
                Tamil
                <i style={{ marginLeft: "4px" }} class="fas fa-trash-alt" />
              </a>
              <a class="btn disabled">
                Hindi
                <i style={{ marginLeft: "4px" }} class="fas fa-trash-alt" />
              </a>
              <a class="btn disabled">
                Gujrati
                <i style={{ marginLeft: "4px" }} class="fas fa-trash-alt" />
              </a>
              <a class="btn disabled">
                Marathi
                <i style={{ marginLeft: "4px" }} class="fas fa-trash-alt" />
              </a>
            </div>
            <div className="center-align" style={{ marginTop: "20px" }}>
              <Table />
            </div>
          </div>
          {/* <div className="col s5 pull-s7">
            <Sidebar />
          </div> */}
        </div>
      </div>
    );
  }
}
export default Dashboard;
