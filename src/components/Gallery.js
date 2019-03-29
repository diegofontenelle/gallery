import React, { Component } from "react";
import GalleryColumn from "./GalleryColumn";
import api from "../services/api";
import Loading from "../common/Loading";

class Gallery extends Component {
  state = {
    loading: true,
    posts: []
  };

  componentDidMount() {
    api.get("posts").then(response => {
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
      const pictureListOne = this.state.posts.slice(
        0,
        this.state.posts.length / 3
      );
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
