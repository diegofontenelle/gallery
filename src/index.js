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
    error: false,
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    if (this.state.loading) {
      return <Loading text="Fetching awesome pictures" />;
    }

    if (this.state.error) {
      this.onError();
    }
    return (
      <div>
        <Navbar onUploadClicked={() => this.showUpload()} />
        <div className="ui container">
          <Gallery
            posts={this.state.posts}
            filesDidChange={() => this.fetchPosts()}
          />
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
    try {
      api
        .get("posts")
        .then(response => {
          console.log(response.data);
          this.setState({
            loading: false,
            posts: [...response.data]
          });
        })
        .catch(error => this.setState({ error: true, message: error.errmsg }));
    } catch (error) {
      this.setState({ error: true, message: error.errmsg });
    }
  }

  onError() {
    return <p>{this.state.message}</p>;
  }

  showUpload() {
    this.setState({ showUpload: true });
  }

  closeUpload() {
    this.setState({ showUpload: false });
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
