import { StyleSheet } from 'react-native'
import { dimensions } from '../style'

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        position: 'absolute',
        backgroundColor: 'rgba(500,500,500,0.7)',
        height: '100%',
        width: '100%'
    },
    spinner: {
        height: dimensions.device.height,
        alignSelf: 'center'
    }
})

export default styles