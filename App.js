import React, { useState } from 'react'
import { Posts, Detail } from './components'
import { StatusBar, View, ImageBackground, ActivityIndicator, Text } from 'react-native'
import logic from './logic'
import { API_URL } from './config'
import { styles } from './components/style'

logic.__context__.API_URL = API_URL

export default App = () => {

  const [error, setError] = useState(undefined)
  const [view, setView] = useState('landing')
  const [postLink, setPostLink] = useState()

  const handleGoToLink = (link) => {
    !postLink ? setPostLink(link) : setPostLink(undefined)
  }

  return (
    <ImageBackground style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {postLink && <Detail link={postLink} goBack={handleGoToLink} />}
      {view === 'landing' && <Posts goToLink={handleGoToLink} />}
    </ImageBackground>
  )
}