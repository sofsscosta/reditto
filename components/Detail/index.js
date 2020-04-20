import React, { useState, useEffect } from "react"
import { TouchableOpacity, Modal, ActivityIndicator, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './style'

export default Detail = ({ link, goBack }) => {

    const [isVisible, setIsVisible] = useState(true)

    return (
        <Modal
            animationType="fade"
            style={{ zIndex: 10, flex: 0 }}
            transparent={true}
            visible={isVisible}
        >
            <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>

                <View>
                    <TouchableOpacity onPress={() => { setIsVisible(!isVisible); return goBack() }}>
                        <Text style={{ fontSize: 100 }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '90%', height: '80%',
                    //  marginTop: '10%', 
                    overflow: 'hidden', alignSelf: 'center', borderRadius: 10
                }}>

                    <WebView
                        useWebKit={true}
                        style={{
                            height: '100%', width: '100%',
                        }}
                        source={{ uri: `https://www.reddit.com${link}` }}
                        startInLoadingState={true}
                        onLoad={() => (<ActivityIndicator size='large' color="rgb(0,0,0)"
                            style={{ height: '100%' }} />)}

                    >
                    </WebView>
                </View>
            </View>
        </Modal>
    )
}
