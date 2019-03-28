import React, { Component } from "react";
import GalleryColumn from "./GalleryColumn";
import axios from "axios";
import Loading from "../common/Loading";

const _ITEMS = [
  {
    author: "Michael D.",
    url:
      "https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Joshua O.",
    url:
      "https://images.unsplash.com/photo-1549907062-15122f762606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Charles R.",
    url:
      "https://images.unsplash.com/photo-1547928575-a78e9187302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Joshua O.",
    url:
      "https://images.unsplash.com/photo-1549907062-15122f762606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Michael D.",
    url:
      "https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Charles R.",
    url:
      "https://images.unsplash.com/photo-1547928575-a78e9187302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

class Gallery extends Component {
  state = {
    loading: true,
    posts: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/posts").then(response => {
      console.log(response.data);
      this.setState({
        loading: false,
        posts: [...response.data]
      });
    });
  }

  render() {
    return this.renderGalleryItems();
  }

  renderGalleryItems() {
    if (this.state.loading) {
      return <Loading text="Fetching awesome pictures" />;
    } else if (this.state.posts.length > 0) {
      const pictureListOne = this.state.posts.slice(0, _ITEMS.length / 3);
      const pictureListTwo = this.state.posts.slice(
        this.state.posts.length / 3,
        (this.state.posts.length / 3) * 2
      );
      const pictureListThree = this.state.posts.slice(
        (this.state.posts.length / 3) * 2,
        this.state.posts.length
      );
      return (
        <div className="ui three column stackable grid">
          <GalleryColumn pictureList={pictureListOne} />
          <GalleryColumn pictureList={pictureListTwo} />
          <GalleryColumn pictureList={pictureListThree} />
        </div>
      );
    }

    return (
      <p>There is nothing in the gallery. Why don't you upload something?</p>
    );
  }
}

export default Gallery;
