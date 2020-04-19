import React, { useState, useEffect } from 'react'
import { Posts } from './components'
import logic from './logic'
import { retrieveLastPosts } from './logic'
import { API_URL } from './config'

logic.__context__.API_URL = API_URL

export default function App() {

  const [error, setError] = useState()
  const [posts, setPosts] = useState()

  useEffect(() => {
    (async () => {
      try {
        const posts = await retrieveLastPosts()
        setPosts(posts)
      }
      catch (error) {
        setError(error)
      }
    })()
  }, [])

  const handleGoToLink = () => {

  }

  return (
    <>
      <Posts posts={posts} goToLink={handleGoToLink} error={error} />
    </>
  )
}