import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import Loading from './common/Loading'
import api from './services/api'

const App = () => {
  const [showUpload, setShowUpload] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [maxPostsReached, setMaxPostsReached] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchPosts = useCallback(() => {
    const skip = posts.length

    try {
      api
        .get(`posts/${skip}`)
        .then(response => {
          setLoading(false)
          setFetching(false)
          setMaxPostsReached(response.data.length === 0)
          setPosts([...posts, ...response.data])
        })
        .catch(err => {
          setError(true)
          setErrorMessage(err.errmsg)
        })
    } catch (err) {
      setError(true)
      setErrorMessage(err.errmsg)
      setLoading(false)
      setFetching(false)
    }
  }, [loading, fetching, maxPostsReached, error, errorMessage])

  const atBottom = element => element.getBoundingClientRect().bottom <= window.innerHeight + 2

  const handleScroll = useCallback(() => {
    if (!maxPostsReached && !fetching) {
      const wrappedElement = document.getElementById('gallery')
      if (wrappedElement)
        if (atBottom(wrappedElement)) {
          setFetching(true)
          fetchPosts()
        }
    }
  }, [maxPostsReached, fetching])

  useEffect(() => {
    fetchPosts()
    window.addEventListener('scroll', handleScroll, true)
  }, [])

  return (
    <>
      {loading && <Loading text="Fetching awesome pictures" />}
      {error && <p>{errorMessage}</p>}

      {!loading && (
        <div>
          <Navbar onUploadClicked={() => setShowUpload(true)} />
          <div className="ui container">
            <Gallery
              posts={posts}
              onDelete={id => setPosts(posts.filter(post => post._id !== id))}
            />
          </div>
          {showUpload && (
            <Upload
              onCloseUpload={() => setShowUpload(false)}
              onDelete={id => setPosts(posts.filter(post => post._id !== id))}
              onUpload={post => setPosts([post, ...posts])}
            />
          )}
        </div>
      )}
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
