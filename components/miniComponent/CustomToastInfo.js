import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const CustomToastInfo = ({message}) => {
    return (
        <View className="bg-infoLight px-6 py-6 mx-6 flex-row gap-4 rounded-2xl items-center">
            <FontAwesome6 name='circle-info' color={"#006FFD"} size={24} />
            <Text className="font-isemibold text-soild flex-shrink text-sm text-info">{message}</Text>
        </View>
    )
}

export default CustomToastInfo