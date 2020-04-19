import React, { useState, useEffect } from 'react'
import { Posts, Detail } from './components'
import logic from './logic'
import { retrieveLastPosts } from './logic'
import { API_URL } from './config'

logic.__context__.API_URL = API_URL

export default function App() {

  const [error, setError] = useState(undefined)
  const [posts, setPosts] = useState()
  const [view, setView] = useState('landing')

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

  const handleGoToLink = () => {
    setView('detail')
  }

  return (
    <>
      {view === 'landing' && <Posts posts={posts} goToLink={handleGoToLink} error={error} />}
      {view === 'detail' && <Detail />}
    </>
  )
}