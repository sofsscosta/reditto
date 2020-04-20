import React from "react"
import styles from './style'
import { TouchableOpacity, Text, View } from "react-native"

export default Header = ({ goToLastPosts, goToTopPosts, goToHotPosts, goToPolemicalPosts }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => goToLastPosts()}>
                <Text style={styles.option_text}>LAST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => goToTopPosts()}>
                <Text style={styles.option_text}>TOP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => goToHotPosts()}>
                <Text style={styles.option_text}>HOT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => goToPolemicalPosts()}>
                <Text style={styles.option_text}>POLEMICAL</Text>
            </TouchableOpacity>
        </View>
    )
}