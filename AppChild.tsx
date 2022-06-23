import React from 'react'
import { Text, View } from 'react-native'
import { useGlobal } from './useGlobal';

const AppChild = () => {
    const [count] = useGlobal('count');
    return (
        <View style={{}}>
            <Text>Current value: {count}</Text>
        </View>
    )
}

export default AppChild