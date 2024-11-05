import React from "react";
import { View, Text } from "react-native";

const CostDetailItem = ({ label, amount, customStyle, customLabelStyle }) => {
  return (
    <View className={`${customStyle} flex flex-row justify-between gap-2 mt-4`}>
      <Text
        className={`${customLabelStyle} text-thistle font-iregular text-sm`}
      >
        {label}
      </Text>
      <Text className='text-soil font-iregular text-sm'>{amount}</Text>
    </View>
  );
};

export default CostDetailItem;
