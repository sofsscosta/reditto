import React from 'react'
import { Text } from 'react-native'
import styles from './style'

export default Feedback = (props) => {

    return <Text style={styles[props.level]}>{props.message}</Text>

}