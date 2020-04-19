import React, { Fragment } from "react"
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './style'

export default function Post({ post }) {

    return (
        <TouchableOpacity>

            <Image style={styles.thumbnail} source={post.thumbnail} />
            <View>
                <Text>{post.created_utc}</Text>
                <Text>{post.title}</Text>
                <View>
                    <Text>{post.author}</Text>
                    <Text>{post.score}</Text>
                    <Text>{post.num_comments}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
