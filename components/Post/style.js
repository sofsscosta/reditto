import { StyleSheet } from 'react-native'
import { dimensions } from '../style'

const styles = StyleSheet.create({
    thumbnail: {
        height: dimensions.device.height * 0.13,
        width: dimensions.device.height * 0.13,
        alignSelf: 'center',
        marginHorizontal: dimensions.device.height * 0.02,
    },
    main_container: {
        flexDirection: 'row',
        marginVertical: dimensions.device.height * 0.02,
        backgroundColor: 'white',
        height: dimensions.device.height * 0.2,
        width: dimensions.device.width * 0.9,
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 1,
        paddingRight: 20
    },
    container: {
        marginTop: dimensions.device.height * 0.03,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    info_container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    author: {
        fontSize: 9,
    },
    date: {
        fontSize: 9,
    },
    secondary_container: {
        flex: 1,
        width: dimensions.device.width * 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    field: {
        fontSize: 9,
    },
    title: {
        flex: 2,
        fontSize: 15,
        width: dimensions.device.width * 0.48,
    }

})

export default styles