import React, { useState, useEffect } from 'react'
import { Posts, Detail, Nav, Spinner } from './components'
import { ImageBackground } from 'react-native'
import logic from './logic'
import { API_URL } from './config'
import { styles } from './components/style'

import { last, top, old, polemical } from './logic/type'
import { fetch } from './utils'
import { processPostsInfo } from './utils'


logic.__context__.API_URL = API_URL

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

      const retrieve = await fetch()
      let posts = fun(retrieve.data.children)
      posts = processPostsInfo(posts)

      setPosts(posts)
      return setLoading(false)
    }
    catch (error) {
      setLoading(false)
      console.log(error)
      return setError(error.message)
    }
  }

  const handleGoToLastPosts = () => {
    handleRedirects(last)
  }

  const handleGoToTopPosts = () => {
    handleRedirects(top)
  }

  const handleGoToOldPosts = () => {
    handleRedirects(old)
  }

  const handleGoToPolemicalPosts = async () => {
    handleRedirects(polemical)
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