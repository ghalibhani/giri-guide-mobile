import React from "react";
import { Text } from "react-native";

const ClimbingPointButton = ({ title }) => {
  return (
    <Text className='text-soil text-xs p-4 border border-soil bg-white rounded-xl'>
      {title}
    </Text>
  );
};

export default ClimbingPointButton;
