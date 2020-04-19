import React from "react"
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './style'

export default Detail = (link) => {

    return (
        <WebView originWhitelist="*" source={{ uri: 'https://www.reddit.com/r/pics/comments/g43kio/not_sure_if_its_the_right_place_for_this/' }} />
    )
}
