import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryColumn = props => {
  return <div className="column">{renderGalleryItems(props.pictureList)}</div>;
};

const renderGalleryItems = pictureList => {
  return pictureList.map((item, index) => (
    <GalleryItem url={item.url} author={item.author} key={index} />
  ));
};

export default GalleryColumn;
