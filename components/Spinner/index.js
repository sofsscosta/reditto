import React from "react"
import { ActivityIndicator, View } from 'react-native'
import styles from './style'

export default Spinner = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.spinner} size='large' color='black' />
        </View>
    )
}


