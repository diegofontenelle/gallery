import React from "react";
import GalleryItem from "./GalleryItem";

const GalleryColumn = ({ pictureList, filesDidChange }) => {
  return (
    <div className="column">
      {renderGalleryItems(pictureList, filesDidChange)}
    </div>
  );
};

const renderGalleryItems = (pictureList, filesDidChange) => {
  return pictureList.map((item, index) => (
    <GalleryItem
      url={item.url}
      id={item._id}
      filesDidChange={filesDidChange}
      key={index}
    />
  ));
};

export default GalleryColumn;
