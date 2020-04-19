import React, { Fragment } from "react"
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './style'

export default Post = ({ post }) => {

    console.log(post.title)

    const handleTimeDisplay = () => {

        return post.created_utc
    }

    return (
        <View style={styles.main_container}>
            <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} resizeMode='contain' />
            <View style={styles.container}>
                <View style={styles.info_container}>
                    <Text style={styles.author}>Posted by {post.author}</Text>
                    <Text style={styles.date}>{handleTimeDisplay()}</Text>
                </View>
                <Text style={styles.title}>{post.title}</Text>
                <View style={styles.secondary_container}>
                    <Text style={styles.field}>Score: {post.score}</Text>
                    <Text style={styles.field}>Comments: {post.num_comments}</Text>
                </View>
            </View>
        </View>
    )
}
