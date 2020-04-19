import React, { Fragment } from "react"
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './style'

export default Post = ({ post }) => {

    console.log(post.title)

    const handleTimeDisplay = () => {
        return post.created_utc
    }

    return (
        <>
            {post.thumbnail !== 'default' && <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} resizeMode='contain' />}
            <View>
                <Text>{handleTimeDisplay()}</Text>
                <Text>{post.title}</Text>
                <View>
                    <Text>{post.author}</Text>
                    <Text>{post.score}</Text>
                    <Text>{post.num_comments}</Text>
                </View>
            </View>
        </>
    )
}
