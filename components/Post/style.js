import { StyleSheet } from 'react-native'
import { dimensions } from '../style'

const styles = StyleSheet.create({
    thumbnail: {
        height: dimensions.device.height * 0.13,
        width: dimensions.device.height * 0.13,
        alignSelf: 'center',
        marginRight: dimensions.device.height * 0.01,
    },
    main_container: {
        paddingHorizontal: dimensions.device.height * 0.01,
        flexDirection: 'row',
        marginVertical: dimensions.device.height * 0.02,
        backgroundColor: 'white',
        height: dimensions.device.height * 0.15,
        width: dimensions.device.width * 0.9,
        borderRadius: 5,
        borderColor: 'lightgrey',
        borderWidth: 1,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    info_container: {
        width: dimensions.device.width * 0.55,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    info: {
        fontSize: 9,
        fontWeight: '200',
        alignSelf: 'center'
    },
    secondary_container: {
        width: dimensions.device.width * 0.55,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    field: {
        fontSize: 9,
        fontWeight: '200',
        alignSelf: 'center'
    },
    title: {
        textAlignVertical: "center",
        flex: 2.5,
        fontSize: 15,
        width: dimensions.device.width * 0.55,
        fontWeight: '200',
    }

})

export default styles