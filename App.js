import React, { useState, useEffect } from 'react'
import { Posts, Detail, Nav, Spinner } from './components'
import { StatusBar, ImageBackground, ActivityIndicator, View } from 'react-native'
import { retrieveLastPosts, retrieveTopPosts, retrieveOldPosts, retrievePolemicalPosts } from './logic'
import logic from './logic'
// import { API_URL } from './config'
import Config from 'react-native-config'
import { styles } from './components/style'

console.log('API_URL', Config)

logic.__context__.API_URL = Config.API_URL

export default App = () => {

  const [error, setError] = useState()
  const [postLink, setPostLink] = useState()
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (() => handleGoToLastPosts())()
  }, [])

  const handleGoToLink = (link) => {
    !postLink ? setPostLink(link) : setPostLink(undefined)
  }

  const handleRedirects = async (fun) => {
    try {
      setError(undefined)
      setLoading(true)
      const posts = await fun()
      setPosts(posts)
      return setLoading(false)
    }
    catch (error) {
      setLoading(false)
      return setError(error.message)
    }
  }

  const handleGoToLastPosts = () => {
    handleRedirects(retrieveLastPosts)
  }

  const handleGoToTopPosts = () => {
    handleRedirects(retrieveTopPosts)
  }

  const handleGoToOldPosts = () => {
    handleRedirects(retrieveOldPosts)
  }

  const handleGoToPolemicalPosts = async () => {
    handleRedirects(retrievePolemicalPosts)
  }

  return (
    <ImageBackground style={styles.container}>
      <Nav goToLastPosts={handleGoToLastPosts} goToTopPosts={handleGoToTopPosts} goToOldPosts={handleGoToOldPosts} goToPolemicalPosts={handleGoToPolemicalPosts} />
      {postLink && <Detail link={postLink} goBack={handleGoToLink} />}
      {loading && <Spinner />}
      <Posts posts={posts} goToLink={handleGoToLink} error={error} />
    </ImageBackground>
  )
}