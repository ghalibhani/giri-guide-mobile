import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MountainButtonGuide = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className='p-4 bg-soil rounded-xl'>
      <Text className='text-white text-xs'>{title}</Text>
    </TouchableOpacity>
  );
};
export default MountainButtonGuide;
