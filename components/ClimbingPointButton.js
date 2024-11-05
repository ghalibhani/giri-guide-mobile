import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ClimbingPointButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className='p-4 border border-soil rounded-xl'
      onPress={onPress}
    >
      <Text className='text-soil text-xs font-isemibold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default ClimbingPointButton;
