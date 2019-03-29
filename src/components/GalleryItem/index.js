import React, { Component } from "react";
import { AuthorContainer, GalleryItemContainer } from "./styles";

class GalleryItem extends Component {
  state = {
    showAuthorDetails: true
  };
  render() {
    return (
      <GalleryItemContainer
        onMouseEnter={() => this.setState({ showAuthorDetails: true })}
        onMouseLeave={() => this.setState({ showAuthorDetails: false })}
      >
        <img
          className="ui centered rounded image"
          src={this.props.url}
          alt="Photograph"
        />
        {this.renderAuthor()}
      </GalleryItemContainer>
    );
  }

  renderAuthor() {
    if (this.state.showAuthorDetails)
      return (
        <AuthorContainer>
          <label>{this.props.author}</label>

          <button className="ui icon button">
            <i className="arrow down icon" />
          </button>
        </AuthorContainer>
      );
  }
}

export default GalleryItem;
