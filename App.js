import React, { useState, useEffect } from 'react'
import { Posts, Detail } from './components'
import { StatusBar, View } from 'react-native'
import logic from './logic'
import { retrieveLastPosts } from './logic'
import { API_URL } from './config'
import styles from './components/style'

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
    setPostLink(link)
    setView('detail')
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {view === 'landing' && <Posts posts={posts} goToLink={handleGoToLink} error={error} />}
        {view === 'detail' && <Detail link={postLink} />}
      </View>
    </>
  )
}