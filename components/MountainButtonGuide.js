import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MountainButtonGuide = ({
  title,
  onPress,
  customStyle,
  customTextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${customStyle} border border-soil p-4 rounded-xl`}
    >
      <Text className={`${customTextStyle} text-xs font-isemibold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default MountainButtonGuide;
