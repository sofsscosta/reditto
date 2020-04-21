import React, { useState, useEffect } from 'react'
import { Posts, Detail, Nav, Spinner } from './components'
import { ImageBackground } from 'react-native'
import { API_URL } from './config'
import { styles } from './components/style'

import { last, top, old, polemical } from './logic/type'
import { fetch } from './utils'
import { processPostsInfo } from './utils'

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

  const handleRedirects = async (sortingFunction) => {
    try {
      setError(undefined)
      setLoading(true)

      const retrieve = await fetch(API_URL)
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

  const handleGoToLastPosts = async () => {
    await handleRedirects(last)
  }

  const handleGoToTopPosts = async () => {
    await handleRedirects(top)
  }

  const handleGoToOldPosts = async () => {
    await handleRedirects(old)
  }

  const handleGoToPolemicalPosts = async () => {
    await handleRedirects(polemical)
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