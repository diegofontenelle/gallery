import React from 'react'
import GalleryItem from './GalleryItem'

const GalleryColumn = ({ pictureList, onDelete }) => {
  return <div className="column">{renderGalleryItems(pictureList, onDelete)}</div>
}

const renderGalleryItems = (pictureList, onDelete) => {
  return pictureList.map((item, index) => (
    <GalleryItem url={item.url} id={item._id} onDelete={onDelete} key={index} />
  ))
}

export default GalleryColumn
