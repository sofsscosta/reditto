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
  const [postLink, setPostLink] = useState(undefined)

  // console.log(postLink)

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
    setView('detail')
    // !postLink ?
    setPostLink(link)
    // : setPostLink(undefined)
  }

  return (
    <>
      <ImageBackground style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {view === 'landing' && <Posts posts={posts} goToLink={handleGoToLink} error={error} />}
        {
          view === 'detail' &&
          // postLink &&
          // <Text style={{ position: 'absolute', alignSelf: 'center', top: '20%' }}>GOT HERE</Text>
          < Detail link={postLink} goBack={handleGoToLink} />
        }
      </ImageBackground>
    </>
  )
}