import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Gallery from "./components/Gallery";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ui container">
          <Gallery />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
