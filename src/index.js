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
    posts: [],
    maxPostsReached: false,
    isFetching: false
  };

  componentDidMount() {
    this.fetchPosts();
    window.addEventListener("scroll", this.handleScroll.bind(this), true);
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
            filesDidChange={id => this.onDelete(id)}
          />
        </div>
        {this.state.showUpload && (
          <Upload
            onCloseUpload={() => this.closeUpload()}
            filesDidChange={() => this.fetchPosts()}
            onUpload={id => this.onUpload(id)}
          />
        )}
      </div>
    );
  }

  handleScroll(event) {
    if (!this.state.maxPostsReached && !this.state.isFetching) {
      const wrappedElement = document.getElementById("gallery");
      if (this.isBottom(wrappedElement)) {
        this.setState({ isFetching: true });
        console.log("Time to fetch");
        this.fetchPosts();
      }
    }
  }

  fetchPosts() {
    const skip = this.state.posts.length;
    try {
      api
        .get(`posts/${skip}`)
        .then(response => {
          console.log(response.data);
          this.setState({
            loading: false,
            isFetching: false,
            maxPostsReached: response.data.length === 0,
            posts: [...this.state.posts, ...response.data]
          });
        })
        .catch(error => this.setState({ error: true, message: error.errmsg }));
    } catch (error) {
      this.setState({
        error: true,
        message: error.errmsg,
        loading: false,
        isFetching: false
      });
    }
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 2;
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

  onUpload = post => {
    console.log(post);
    this.setState({
      posts: [post, ...this.state.posts]
    });
    console.log(this.state);
  };

  onDelete = id => {
    this.setState({
      posts: this.state.posts.filter(post => post._id !== id)
    });
    console.log(this.state);
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));
