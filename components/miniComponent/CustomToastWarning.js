import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const CustomToastWarning = ({message}) => {
    return (
        <View className="bg-warningLight px-6 py-6 flex-row gap-4 rounded-2xl items-center">
            <FontAwesome6 name='circle-exclamation' color={"#E86339"} size={24} />
            <Text className="font-isemibold text-soild flex-shrink text-sm text-warningHover">{message}</Text>
        </View>
    )
}

export default CustomToastWarning