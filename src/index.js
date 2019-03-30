import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import Gallery from "./components/Gallery";
import Navbar from "./Navbar";
import Upload from "./components/Upload";
import Loading from "./common/Loading";
import api from "./services/api";

class App extends Component {
  state = {
    showUpload: false,
    loading: true,
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    if (this.state.loading) {
      return <Loading text="Fetching awesome pictures" />;
    }
    return (
      <div>
        <Navbar onUploadClicked={() => this.showUpload()} />
        <div className="ui container">
          <Gallery posts={this.state.posts} />
        </div>
        {this.state.showUpload && (
          <Upload
            onCloseUpload={() => this.closeUpload()}
            filesDidChange={() => this.fetchPosts()}
          />
        )}
      </div>
    );
  }

  fetchPosts() {
    api.get("posts").then(response => {
      console.log(response.data);
      this.setState({
        loading: false,
        posts: [...response.data]
      });
    });
  }

  showUpload() {
    this.setState({ showUpload: true });
  }

  closeUpload() {
    this.setState({ showUpload: false });
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
