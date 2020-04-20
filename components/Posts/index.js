import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './style'
import Post from '../Post'

export default Posts = ({ posts, goToLink, error }) => {

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

