import React, { useState } from "react"
import { TouchableOpacity, Modal, ActivityIndicator, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './style'

export default Detail = ({ link, goBack }) => {

    const [isVisible, setIsVisible] = useState(true)

    return (
        <Modal
            animationType="fade"
            style={styles.modal}
            transparent={true}
            visible={isVisible}>
            <TouchableOpacity
                onPress={() => { setIsVisible(!isVisible); return goBack() }}
                style={styles.background}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => { setIsVisible(!isVisible); return goBack() }}>
                        < Text style={styles.return}>x</Text>
                    </TouchableOpacity>
                    <View style={styles.webview_container}>
                        <WebView
                            useWebKit={true}
                            style={styles.webview}
                            source={{ uri: `https://www.reddit.com${link}` }}
                            startInLoadingState={true}
                            onLoad={() => (<ActivityIndicator size='large' color="rgb(0,0,0)" />)} />
                    </View>
                </View>
            </TouchableOpacity >
        </Modal >
    )
}
