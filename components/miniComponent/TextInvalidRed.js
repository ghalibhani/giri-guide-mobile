import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export default function TextInvalidRed({ errorMessage }) {
  return (
    <View className='mb-4 bg-red-200 flex-row items-center gap-1 border border-red-700 rounded-lg px-4 py-3'>
      <AntDesign name='exclamationcircleo' size={20} color='#b91c1c' />
      <Text className='text-red-700 text-sm font-iregular'>{errorMessage}</Text>
    </View>
  );
}
