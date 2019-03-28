import React from "react";

const Loading = props => {
  return (
    <div className="ui basic segment" style={{ height: "50vh" }}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.text}</div>
      </div>
      <p />
    </div>
  );
};

Loading.defaultProps = {
  text: "Loading..."
};

export default Loading;
