import React, { Component } from "react";
import { ButtonsContainer, GalleryItemContainer } from "./styles";
import api from "../../services/api";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";

class GalleryItem extends Component {
  _isMounted = false;

  state = {
    showButtons: false,
    imageLoaded: false,
    loading: false
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { url, id, key, scrollPosition } = this.props;

    return (
      <GalleryItemContainer loaded={this.state.imageLoaded}>
        <LazyLoadImage
          src={url}
          id={id}
          //filesDidChange={filesDidChange}
          width="100%"
          height="auto"
          scrollPosition={scrollPosition}
          key={key}
          alt="Photograph"
          className="ui centered rounded image"
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
    if (this._isMounted) {
      this.setState({ loading: true });
      try {
        await api.delete(`posts/${id}`);
        this.props.filesDidChange(id);
      } catch (error) {
        console.log(error);
      }

      this._isMounted && this.setState({ loading: false });
    }
  };
}

export default trackWindowScroll(GalleryItem);
