import { View, Text } from 'react-native'
import React from 'react'

const BestTimeForHiking = ({data}) => {
    return (
        <View className="p-6 bg-white text-sm rounded-[30px] mb-5 gap-5">
            <Text className="text-base text-soil font-isemibold">
                Waktu Pendakian Terbaik
            </Text>
            <Text className="text-sm font-iregular text-evergreen">
                {data}
            </Text>
        </View>
    )
}

export default BestTimeForHiking