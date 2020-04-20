import React, { useState, useEffect } from 'react'
import { Posts, Detail, Nav } from './components'
import { StatusBar, ImageBackground } from 'react-native'
import { retrieveLastPosts } from './logic'
import logic from './logic'
import { API_URL } from './config'
import { styles } from './components/style'

logic.__context__.API_URL = API_URL

export default App = () => {

  const [error, setError] = useState(undefined)
  const [view, setView] = useState('landing')
  const [postLink, setPostLink] = useState()
  const [posts, setPosts] = useState()

  useEffect(() => {
    (async () => {
      try {
        const posts = await retrieveLastPosts()
        setPosts(posts)
      }
      catch (error) {
        console.log(error)
        setError(error)
      }
    })()
  }, [])

  const handleGoToLink = (link) => {
    !postLink ? setPostLink(link) : setPostLink(undefined)
  }

  const handleGoToLastPosts = () => {

  }

  const handleGoToTopPosts = () => {

  }

  const handleGoToHotPosts = () => {

  }

  const handleGoToPolemicalPosts = () => {

  }

  return (
    <ImageBackground style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Nav goToLastPosts={handleGoToLastPosts} goToTopPosts={handleGoToTopPosts} goToHotPosts={handleGoToHotPosts} goToPolemicalPosts={handleGoToPolemicalPosts} />
      {postLink && <Detail link={postLink} goBack={handleGoToLink} />}
      {view === 'landing' && <Posts posts={posts} goToLink={handleGoToLink} error={error} />}
    </ImageBackground>
  )
}