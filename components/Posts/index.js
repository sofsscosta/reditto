import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import Feedback from '../Feedback'
import styles from './style'
import Post from '../Post'

export default Posts = ({ posts, goToLink, error }) => {

    return (
        <>
            {error &&
                <View style={styles.feedback}>
                    <Feedback level='error' message={error} />
                </View>}
            <FlatList
                style={styles.container}
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => goToLink(item.permalink)}>
                        <Post post={item} />
                    </TouchableOpacity>
                )} />
        </>

    )
}

