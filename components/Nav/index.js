import React, { useState } from "react"
import styles from './style'
import { TouchableOpacity, Text, View } from "react-native"

export default Nav = ({ goToLastPosts, goToTopPosts, goToOldPosts, goToPolemicalPosts }) => {

    const [pressed, setPressed] = useState('last')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={pressed === 'last' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToLastPosts(); return setPressed('last') }}>
                <Text style={styles.option_text}>LAST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'top' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToTopPosts(); return setPressed('top') }}>
                <Text style={styles.option_text}>TOP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'polemical' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToPolemicalPosts(); return setPressed('polemical') }}>
                <Text style={styles.option_text}>POLEMICAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'older' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToOldPosts(); return setPressed('older') }}>
                <Text style={styles.option_text}>OLDER</Text>
            </TouchableOpacity>
        </View>
    )
}