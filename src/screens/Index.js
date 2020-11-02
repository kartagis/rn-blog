import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Context from '../context/Context'

const Index = () => {
    const value = useContext(Context)
    return (
        <View>
            <Text>Index</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Index