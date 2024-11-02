import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'

const MinimizeCard = ({title, data, icon}) => {
  return (
    <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
        <View className="flex-row items-center gap-[15] ">
            <FontAwesome6 name={icon} color={"#ECD768"} size={20} />
            <View className="gap-[5]">
                <Text className="font-iregular text-sm text-thistle">{title}</Text>
                <Text className="font-imedium text-base color-evergreen">{data}</Text>
            </View>
        </View>
    </View>
  )
}

export default MinimizeCard

const styles = StyleSheet.create({})