import { StyleSheet } from 'react-native'
import { dimensions } from '../style'

const styles = StyleSheet.create({
    container: {
        // width: dimensions.device.width * 0.9,
        alignSelf: 'center',
        margin: dimensions.device.width * 0.05,
        marginTop: dimensions.device.width * 0.35,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 0,
    }
})

export default styles