import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modal: {
        flex: 0
    },
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        width: '90%',
        height: '80%',
        marginTop: '20%',
        overflow: 'hidden',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    return: {
        fontSize: 30,
        color: 'black',
        fontWeight: '100',
        marginLeft: '4%',
        marginBottom: '1%'
    },
    webview_container: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        zIndex: 20,
    },
    webview: {
        height: '100%',
        width: '100%',
    }
})

export default styles