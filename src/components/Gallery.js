import React from "react";
import GalleryColumn from "./GalleryColumn";

const Gallery = props => {
  const { posts } = props;

  if (posts.length > 0) {
    const pictureListOne = posts.slice(0, posts.length / 3);
    const pictureListTwo = posts.slice(
      posts.length / 3,
      (posts.length / 3) * 2
    );
    const pictureListThree = posts.slice((posts.length / 3) * 2, posts.length);
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
};

export default Gallery;
