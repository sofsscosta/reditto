import React, { useState, useEffect } from 'react'
import { Posts, Detail } from './components'
import { StatusBar, View, ImageBackground, ActivityIndicator, Text } from 'react-native'
import logic from './logic'
import { retrieveLastPosts } from './logic'
import { API_URL } from './config'
import { styles } from './components/style'

logic.__context__.API_URL = API_URL

export default App = () => {

  const [error, setError] = useState(undefined)
  const [view, setView] = useState('landing')
  const [posts, setPosts] = useState()
  const [postLink, setPostLink] = useState()

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

  return (
    <ImageBackground style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {postLink && <Detail link={postLink} goBack={handleGoToLink} error={error} />}
      {view === 'landing' && <Posts posts={posts} goToLink={handleGoToLink} error={error} />}
    </ImageBackground>
  )
}