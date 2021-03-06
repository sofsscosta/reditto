import { StyleSheet } from 'react-native'
import { dimensions, colors } from '../style'

const styles = StyleSheet.create({
    container: {
        marginTop: dimensions.device.width * 0.17,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    option: {
        backgroundColor: colors.navColor.color,
        height: dimensions.device.height * 0.05,
        width: dimensions.device.width * 0.245,
        justifyContent: 'center'
    },
    option_pressed: {
        backgroundColor: colors.mainColor.color
    },
    option_text: {
        fontSize: 15,
        fontWeight: '100',
        alignSelf: 'center'
    }
})

export default styles