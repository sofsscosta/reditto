import React, { TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator, View } from "react"
import { WebView } from 'react-native-webview'
import styles from './style'

export default Detail = ({ link, goBack }) => {

    console.log(link)

    return (

        // <TouchableOpacity onPress={() => goBack()}>

        // <View style={{
        //     height: '100%',
        //     width: '100%',
        //     flex: 1,
        //     flexGrow: 1
        // }}>
        <WebView
            useWebKit={true}
            style={{
                width: '90%', height: '80%',
                position: 'absolute',
                marginTop: '20%', alignSelf: 'center', zIndex: 20,
                flex: 1
            }}
            source={{ uri: `https://www.reddit.com${link}` }}
            startInLoadingState={true}
            onLoad={() => (<ActivityIndicator size='large' color="#ffffff"
                style={{ height: 80, marginTop: 10 }} />)}
        >
        </WebView>
        // </View>
        // </TouchableOpacity>

        // <WebView
        //     startInLoadingState={true}
        //     hidesWhenStopped={true}
        //     renderLoading={() => (<ActivityIndicator
        //         animating={true}
        //         color="#ffffff"
        //         style={{ height: 80, marginTop: 10 }}
        //         size="large" />)}
        //     style={{ marginTop: '20%', width: '100%', height: '80%', position: 'absolute', zIndex: 30 }}
        //     source={{ uri: `https://www.reddit.com${link}` }}
        // />
    )
}
