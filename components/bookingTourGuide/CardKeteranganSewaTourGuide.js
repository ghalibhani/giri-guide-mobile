import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardKeteranganSewaTourGuide = ({mountainName, hikingPointName, tourGuideName}) => {
  return (
    <View className="bg-white rounded-[12px] px-6 py-6 gap-6">
        <View className="gap-2">
            <Text className="color-thistle text-xs font-iregular">Nama Gunung</Text>
            <Text className="color-soil text-sm font-ibold">{mountainName}</Text>
        </View>

        <View className="gap-2">
            <Text className="color-thistle text-xs font-iregular">Titik Pendakian</Text>
            <Text className="color-soil text-sm font-ibold">{hikingPointName}</Text>
        </View>

        <View className="gap-2">
            <Text className="color-thistle text-xs font-iregular">Nama Tour Guide</Text>
            <Text className="color-soil text-sm font-ibold">{tourGuideName}</Text>
        </View>
    </View>
  )
}

export default CardKeteranganSewaTourGuide

const styles = StyleSheet.create({})