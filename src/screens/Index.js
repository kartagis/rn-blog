import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Context from '../context/Context'

const Index = () => {
    const blogPosts = useContext(Context)
    return (
        <View>
            <Text>Index</Text>
            <FlatList 
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Index