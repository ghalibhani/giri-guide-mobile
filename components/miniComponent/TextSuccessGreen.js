import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

export default function TextSuccessGreen({ successMessage, customStyle }) {
  return (
    <View
      className={`${customStyle} mb-4 bg-successLight flex-row items-center gap-2 border border-successHover rounded-lg px-4 py-3`}
    >
      <AntDesign name='checkcircleo' size={19} color='#298267' />
      <Text className='text-successHover text-sm font-iregular'>
        {successMessage}
      </Text>
    </View>
  );
}
