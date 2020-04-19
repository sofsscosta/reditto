import React from "react"
import { FlatList, TouchableOpacity } from 'react-native'
import styles from './style'
import Post from '../Post'

export default Posts = ({ posts, error, goToLink }) => {

    return (
        <FlatList
            style={styles.myVeggies_container}
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={goToLink}>
                    <Post post={item} error={error} />
                </TouchableOpacity>
            )} />

    )
}

