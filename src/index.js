import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Gallery from "./components/Gallery";
import Navbar from "./Navbar";
import Upload from "./components/Upload";

class App extends Component {
  state = {
    showUpload: false
  };

  render() {
    return (
      <div>
        <Navbar onUploadClicked={() => this.showUpload()} />
        <div className="ui container">
          <Gallery />
        </div>
        {this.state.showUpload && (
          <Upload onCloseUpload={() => this.closeUpload()} />
        )}
      </div>
    );
  }

  showUpload() {
    this.setState({ showUpload: true });
  }

  closeUpload() {
    this.setState({ showUpload: false });
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
