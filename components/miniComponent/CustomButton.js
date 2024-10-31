import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, buttonHandling, customStyle}) => {
  return (
    <TouchableOpacity className={`${customStyle} py-[16.5] rounded-xl items-center`} onPress={buttonHandling}>
        <Text className="font-isemibold text-sm text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})