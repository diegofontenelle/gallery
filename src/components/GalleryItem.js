import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    showAuthorDetails: false
  };
  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ showAuthorDetails: true })}
        onMouseLeave={() => this.setState({ showAuthorDetails: false })}
        style={{ position: "relative", marginBottom: "12.5px" }}
      >
        <img
          className="ui centered rounded image"
          style={{ width: "100%", maxWidth: "400px" }}
          src={this.props.url}
          alt="Photograph"
        />
        {this.renderAuthor()}
      </div>
    );
  }

  renderAuthor() {
    if (this.state.showAuthorDetails)
      return (
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "50px",
            backgroundColor: "rgba(0,0,0, .2",
            padding: "0 5px",
            bottom: "0",
            borderBottomLeftRadius: ".3125em",
            borderBottomRightRadius: ".3125em"
          }}
        >
          <label style={{ color: "#fff", bottom: "10px" }}>
            {this.props.author}
          </label>

          <button
            className="ui icon button"
            style={{ position: "absolute", right: "0" }}
          >
            <i className="arrow down icon" />
          </button>
        </div>
      );
  }
}

export default GalleryItem;
