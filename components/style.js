import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const dimensions = StyleSheet.create({
    device: {
        height: deviceHeight,
        width: deviceWidth
    }
})

const colors = StyleSheet.create({
    mainColor: {
        color: 'rgb(240, 230, 220)'
    },
    navColor: {
        color: 'rgba(254, 250, 246, 1)'
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(248, 233, 216)',
        height: '100%',
        width: '100%',
        flex: 1,
        flexGrow: 1
    }
})



export { styles, dimensions, colors }