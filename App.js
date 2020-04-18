import React, { useState, useEffect, Fragment } from 'react'
import {
  Posts, Post, Header, Footer
} from './components'
import logic from './logic'
// import { retrieve } from './logic'
import { AsyncStorage } from 'react-native'
import { API_URL } from './config'

logic.__context__.storage = AsyncStorage
logic.__context__.API_URL = API_URL

export default function App() {

  // const [error, setError] = useState()
  // const [view, setView] = useState('landing')

  return (
    <Fragment>
      < Header />
      {/* {view === 'landing' && <Posts />}
      {view === 'detail' && <Post />} */}
      <Footer />
    </Fragment>
  )
}