import { View, Text, Image } from 'react-native'
import React from 'react'

const CustomNotFound = ({title, customStyle}) => {
  return (
    <View className="items-center align-middle mt-14">
        <View className={`items-center justify-center ${customStyle}`}>
            <Image 
                source={require('../../assets/not_found.png')}
                className="w-96 h-96"
                resizeMode='cover'
            />
        
        </View>
        <Text className="font-isemibold text-soil text-lg mx-6 text-center">{title}</Text>
    </View>
  )
}

export default CustomNotFound