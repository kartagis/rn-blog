import React from 'react'
import { View } from 'react-native'

const Context = React.createContext()

export const Provider = ({ children }) => {
    const blogPosts = [
        { title: 'Blog Post #1'},
        { title: 'Blog Post #2'},
        { title: 'Blog Post #3'},
    ]
    return (
        <View>
            <Context.Provider value={blogPosts}>{children}</Context.Provider>
        </View>
    )
}

export default Context