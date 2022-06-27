import React from 'react'
import { Text, View } from 'react-native'
import { useGlobalState } from './useGlobalState';

const AppChild = () => {
    const [count] = useGlobalState('count');
    return (
        <View style={{}}>
            <Text>Current value: {count}</Text>
        </View>
    )
}

export default AppChild