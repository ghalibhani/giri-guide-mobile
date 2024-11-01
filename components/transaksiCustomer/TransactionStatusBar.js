// TransactionStatusBar.js
import React from "react";
import { View, Text } from "react-native";

const TransactionStatusBar = () => {
  return (
    <View className='bg-white rounded-verylarge py-5 px-6 gap-5'>
      <View className='flex-row'>
        <Text className='font-ibold text-sm text-center text-soil w-1/2'>
          Berlangsung
        </Text>
        <Text className='font-iregular text-sm text-center text-soil w-1/2'>
          Selesai
        </Text>
      </View>
      <View>
        <View className='h-[1] bg-borderCustom'></View>
        <View className='h-[4] rounded-xl w-1/2 bg-soil'></View>
      </View>
    </View>
  );
};

export default TransactionStatusBar;
