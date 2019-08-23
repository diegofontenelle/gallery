import React, { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import { ButtonsContainer, GalleryItemContainer } from './styles'
import api from '../../services/api'

const GalleryItem = ({ url, id, key, scrollPosition, onDelete }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return function cleanup() {
      setIsMounted(false)
    }
  }, [])

  const handleDelete = useCallback(async itemId => {
    if (isMounted) {
      setLoading(true)

      try {
        await api.delete(`posts/${itemId}`)
        onDelete(itemId)
      } catch (error) {
        console.log(error)
      }

      isMounted && setLoading(false)
    }
  })

  const renderButtons = () => {
    if (showButtons)
      return (
        <ButtonsContainer>
          {loading && <i className="spinner loading icon" />}

          {!loading && (
            <>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <i className="linkify icon" />
              </a>

              <i onClick={() => handleDelete(id)} className="trash red icon" />
            </>
          )}
        </ButtonsContainer>
      )
  }

  return (
    <GalleryItemContainer loaded={imageLoaded}>
      <LazyLoadImage
        src={url}
        id={id}
        // filesDidChange={filesDidChange}
        width="100%"
        height="auto"
        scrollPosition={scrollPosition}
        key={key}
        alt="Photograph"
        className="ui centered rounded image"
        onLoad={() => {
          setImageLoaded(true)
          setShowButtons(true)
          setLoading(false)
        }}
      />
      {renderButtons()}
    </GalleryItemContainer>
  )
}

GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  scrollPosition: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default trackWindowScroll(GalleryItem)
