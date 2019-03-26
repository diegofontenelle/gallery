import React, { Component } from "react";
import GalleryColumn from "./GalleryColumn";

const _ITEMS = [
  {
    author: "Michael D.",
    url:
      "https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Joshua O.",
    url:
      "https://images.unsplash.com/photo-1549907062-15122f762606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Charles R.",
    url:
      "https://images.unsplash.com/photo-1547928575-a78e9187302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Joshua O.",
    url:
      "https://images.unsplash.com/photo-1549907062-15122f762606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Michael D.",
    url:
      "https://images.unsplash.com/photo-1549820803-0aa4a001449f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    author: "Charles R.",
    url:
      "https://images.unsplash.com/photo-1547928575-a78e9187302c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

const Gallery = () => {
  const pictureListOne = _ITEMS.slice(0, _ITEMS.length / 3);
  const pictureListTwo = _ITEMS.slice(
    _ITEMS.length / 3,
    (_ITEMS.length / 3) * 2
  );
  const pictureListThree = _ITEMS.slice((_ITEMS.length / 3) * 2, _ITEMS.length);
  return (
    <div className="ui three column stackable grid">
      <GalleryColumn pictureList={pictureListOne} />
      <GalleryColumn pictureList={pictureListTwo} />
      <GalleryColumn pictureList={pictureListThree} />
    </div>
  );
};

export default Gallery;
