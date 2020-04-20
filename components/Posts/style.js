import { StyleSheet } from 'react-native'
import { dimensions } from '../style'

const styles = StyleSheet.create({
    container: {
        // width: dimensions.device.width * 0.9,
        alignSelf: 'center',
        marginTop: dimensions.device.width * 0.05,
        margin: dimensions.device.width * 0.05,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 0,
    },
    feedback: {
        top: dimensions.device.width * 0.07,
    }
})

export default styles