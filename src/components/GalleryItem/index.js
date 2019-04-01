import React, { Component } from "react";
import { ButtonsContainer, GalleryItemContainer } from "./styles";
import api from "../../services/api";

class GalleryItem extends Component {
  state = {
    showButtons: false,
    imageLoaded: false,
    loading: false
  };
  render() {
    return (
      <GalleryItemContainer loaded={this.state.imageLoaded}>
        <img
          className="ui centered rounded image"
          src={this.props.url}
          alt="Photograph"
          onLoad={() =>
            this.setState({
              imageLoaded: true,
              showButtons: true,
              loading: false
            })
          }
        />
        {this.renderButtons()}
      </GalleryItemContainer>
    );
  }

  renderButtons() {
    const { url, id } = this.props;
    if (this.state.showButtons)
      return (
        <ButtonsContainer>
          {this.state.loading && <i className="spinner loading icon" />}

          {!this.state.loading && (
            <>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <i className="linkify icon" />
              </a>

              <i
                onClick={() => this.handleDelete(id)}
                className="trash red icon"
              />
            </>
          )}
        </ButtonsContainer>
      );
  }

  handleDelete = async id => {
    this.setState({ loading: true });
    try {
      await api.delete(`posts/${id}`);
      this.props.filesDidChange();
    } catch (error) {
      console.log(error);
    }

    this.setState({ loading: false });
  };
}

export default GalleryItem;
