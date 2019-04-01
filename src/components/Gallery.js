import React from "react";
import GalleryColumn from "./GalleryColumn";

const Gallery = ({ posts, filesDidChange }) => {
  if (posts.length > 0) {
    const pictureListOne = posts.slice(0, posts.length / 3);
    const pictureListTwo = posts.slice(
      posts.length / 3,
      (posts.length / 3) * 2
    );
    const pictureListThree = posts.slice((posts.length / 3) * 2, posts.length);
    return (
      <div id="gallery" className="ui three column stackable grid">
        <GalleryColumn
          filesDidChange={filesDidChange}
          pictureList={pictureListOne}
        />
        <GalleryColumn
          filesDidChange={filesDidChange}
          pictureList={pictureListTwo}
        />
        <GalleryColumn
          filesDidChange={filesDidChange}
          pictureList={pictureListThree}
        />
      </div>
    );
  }

  return (
    <p>There is nothing in the gallery. Why don't you upload something?</p>
  );
};

export default Gallery;
