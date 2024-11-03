import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CustomButton = ({title, buttonHandling, customStyle, isDisabled, iconName}) => {
  return (
    <TouchableOpacity className={`${customStyle} py-[16.5] gap-2 rounded-xl flex-row items-center justify-center`} onPress={buttonHandling} disabled={isDisabled}>
        <Text className="font-isemibold text-sm text-white">{title}</Text>
        {iconName && (
          <Ionicons 
            name={iconName} 
            size={20} 
            color={"#fff"} 
          />
        )}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})