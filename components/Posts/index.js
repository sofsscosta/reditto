import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { retrieveLastPosts } from '../../logic'
import styles from './style'
import Post from '../Post'

export default Posts = ({ goToLink }) => {

    const [error, setError] = useState(undefined)
    const [posts, setPosts] = useState()

    useEffect(() => {
        (async () => {
            try {
                const posts = await retrieveLastPosts()
                setPosts(posts)
            }
            catch (error) {
                console.log(error)
                setError(error)
            }
        })()
    }, [])

    return (
        <FlatList
            style={styles.container}
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => goToLink(item.permalink)}>
                    <Post post={item} error={error} />
                </TouchableOpacity>
            )} />

    )
}

