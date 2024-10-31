import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HeaderSewaTourGuide = () => {
  return (
    <View>
        <View className="flex-row items-center">
            <TouchableOpacity className="bg-ivory w-[30] h-[30] mt- items-center justify-center rounded-full">
                <View className="justify-center items-center">
                    <Ionicons name={'chevron-back'} size={15} color={"#503A3A"} />
                </View>
            </TouchableOpacity>
            <Text className="color-ivory absolute left-1/2 -translate-x-1/2 text-xl justify-center font-isemibold">Sewa Tour Guide</Text>
        </View>
    </View>
  )
}

export default HeaderSewaTourGuide

const styles = StyleSheet.create({})