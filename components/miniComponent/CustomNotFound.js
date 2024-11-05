import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomNotFound = ({title}) => {
  return (
    <View className="items-center align-middle mt-14">
        <View className="items-center justify-center mt-10">
            <Image 
                source={require('../../assets/not_found.png')}
                className="w-96 h-96"
                resizeMode='cover'
            />
        
        </View>
        <Text className="font-isemibold text-soil text-lg mx-4 text-center">{title}</Text>
    </View>
  )
}

export default CustomNotFound