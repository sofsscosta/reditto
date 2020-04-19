import React, { Fragment } from "react"
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './style'

export default Post = ({ post }) => {

    console.log(post.title)

    return (
        <View style={styles.main_container}>
            {post.thumbnail !== 'default' && <Image style={styles.thumbnail} source={{ uri: post.thumbnail }} resizeMode='contain' />}
            <View style={styles.container}>
                <View style={styles.info_container}>
                    <Text style={styles.info}>Posted by {post.author}</Text>
                    <Text style={styles.info}>{post.created_utc}</Text>
                </View>
                <Text style={styles.title}>{post.title}</Text>
                <View style={styles.secondary_container}>
                    <Text style={styles.field}>Score: {post.score}</Text>
                    <Text style={styles.field}>{post.num_comments === 1 ? `${post.num_comments} comment` : `${post.num_comments} comments`}</Text>
                </View>
            </View>
        </View>
    )
}
