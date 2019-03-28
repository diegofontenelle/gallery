import React, { Component } from "react";

class Navbar extends Component {
  state = {
    active: ""
  };

  render() {
    return (
      <div className="ui pointing menu">
        <div className="ui container">
          <div className="item">
            <img
              className="ui mini image"
              alt="Lux Gallery"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZEDMGCggYg7HY6L3vjac6JuYeNr9QymdQeDHS5axwvFoNU-T"
            />
          </div>
          <div className="right menu">
            <a onClick={this.props.onUploadClicked} className="ui item">
              <i className="icon user" />
              Upload image
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
