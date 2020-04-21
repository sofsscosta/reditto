import React, { useState } from "react"
import styles from './style'
import { TouchableOpacity, Text, View } from "react-native"

export default Nav = ({ goToLastPosts, goToTopPosts, goToOldPosts, goToPolemicalPosts }) => {

    const [pressed, setPressed] = useState('last')

    return (
        <View style={styles.container}>
            <TouchableOpacity style={pressed === 'last' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToLastPosts(); setPressed('last') }}>
                <Text style={styles.option_text}>LAST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'top' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToTopPosts(); setPressed('top') }}>
                <Text style={styles.option_text}>TOP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'polemical' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToPolemicalPosts(); setPressed('polemical') }}>
                <Text style={styles.option_text}>POLEMICAL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={pressed === 'older' ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToOldPosts(); setPressed('older') }}>
                <Text style={styles.option_text}>OLDER</Text>
            </TouchableOpacity>
        </View>
    )
}