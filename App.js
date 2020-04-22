import React, { useState, useEffect } from 'react'
import { Posts, Detail, Nav, Spinner } from './components'
import { ImageBackground } from 'react-native'
import { API_URL } from './config'
import { styles } from './components/style'
import { last } from './logic/type'

import { retrievePosts } from './utils'
import { processPostsInfo } from './utils'

export default App = () => {

  const [error, setError] = useState()
  const [postLink, setPostLink] = useState()
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (() => handleRedirects(last))()
  }, [])

  const handleGoToLink = (link) => {
    !postLink ? setPostLink(link) : setPostLink(undefined)
  }

  const handleRedirects = async (sortingFunction) => {
    try {
      setError(undefined)
      setLoading(true)

      const retrieve = await retrievePosts(API_URL)
      let posts = sortingFunction(retrieve.data.children)
      posts = processPostsInfo(posts)

      setPosts(posts)
      return setLoading(false)
    }
    catch (error) {
      setLoading(false)
      return setError(error.message)
    }
  }

  return (
    <ImageBackground style={styles.container}>
      <Nav goToPosts={handleRedirects} />
      {postLink && <Detail link={postLink} goBack={handleGoToLink} />}
      {loading && <Spinner />}
      <Posts posts={posts} goToLink={handleGoToLink} error={error} />
    </ImageBackground>
  )
}