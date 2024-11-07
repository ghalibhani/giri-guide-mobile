import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export default function TextInvalidRed({ errorMessage }) {
  return (
    <View className='mb-4 bg-errorLight flex-row items-center gap-2 border border-errorHover rounded-lg px-4 py-3'>
      <AntDesign name='exclamationcircleo' size={19} color='#ed3241' />
      <Text className='text-errorHover text-sm font-iregular'>
        {errorMessage}
      </Text>
    </View>
  );
}
