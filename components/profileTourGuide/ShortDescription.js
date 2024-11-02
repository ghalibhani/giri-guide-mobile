import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

const ShortDescription = ({data}) => {
    return (
        <View className="mx-6 px-6 py-6 rounded-verylarge bg-white gap-3">
            <View className="flex-row justify-between">
                <Text className="font-ibold text-soil">Deskripsi Singkat</Text>
                <MaterialCommunityIcons name='pencil' color={"#503A3A"} size={20} />
            </View>

            <Text className="font-iregular text-evergreen text-sm flex-shrink">
            Dengan komitmen penuh, kami selalu berusaha memberikan pelayanan terbaik bagi seluruh pelanggan setia kami, menjaga kualitas dan kepercayaan yang telah dibangun.
            </Text>
            
        </View>
    )
}

export default ShortDescription