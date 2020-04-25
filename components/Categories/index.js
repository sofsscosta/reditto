import React, { useState } from "react"
import styles from './style'
import { TouchableOpacity, FlatList, Text, View } from "react-native"
import { last, top, old, polemical } from '../../logic/category'

export default Categories = ({ goToPosts }) => {

    const [pressed, setPressed] = useState('last')
    const categories = [
        { name: 'last', category: last, id: '0' },
        { name: 'top', category: top, id: '1' },
        { name: 'polemical', category: polemical, id: '2' },
        { name: 'older', category: old, id: '3' },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={pressed === item.name ? styles.option : [styles.option, styles.option_pressed]} onPress={() => { goToPosts(item.category); setPressed(item.name) }}>
                        <Text style={styles.option_text}>{item.name.toUpperCase()}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}