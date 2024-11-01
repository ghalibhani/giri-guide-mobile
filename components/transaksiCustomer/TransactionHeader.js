// TransactionHeader.js
import React from "react";
import { View, Text } from "react-native";

const TransactionHeader = ({ titleHeader }) => {
  return (
    <View className='bg-soil rounded-b-verylarge py-6 px-6 pt-11'>
      <Text className='font-ibold text-xl text-ivory'>{titleHeader}</Text>
    </View>
  );
};

export default TransactionHeader;
