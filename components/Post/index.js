import React, { Fragment } from "react"
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './style'

export default Post = ({ post }) => {

    const { thumbnail, author, created_utc, title, score, num_comments } = post

    return (
        <View style={styles.main_container}>
            {thumbnail !== 'default' && <Image style={styles.thumbnail} source={{ uri: thumbnail }} resizeMode='contain' />}
            <View style={styles.container}>
                <View style={styles.info_container}>
                    <Text style={styles.info}>Posted by {author}</Text>
                    <Text style={styles.info}>{created_utc}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.secondary_container}>
                    <Text style={styles.field}>Score: {score}</Text>
                    <Text style={styles.field}>{num_comments === 1 ? `${num_comments} comment` : `${post.num_comments} comments`}</Text>
                </View>
            </View>
        </View>
    )
}
