// TransactionStatusBar.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TransactionStatusBar = ({ onStatusChange }) => {
  const [activeStatus, setActiveStatus] = useState("berlangsung");
  const handlePress = (status) => {
    setActiveStatus(status);
    if (onStatusChange) onStatusChange(status);
  };

  return (
    <View>
      <View className='bg-white rounded-verylarge py-5 px-6 gap-5'>
        <View className='flex-row'>
          <TouchableOpacity
            className={`w-1/2 `}
            onPress={() => handlePress("berlangsung")}
          >
            <Text
              className={` text-sm text-center ${
                activeStatus === "berlangsung" ? "font-ibold" : "text-soil"
              }`}
            >
              Berlangsung
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`w-1/2`}
            onPress={() => handlePress("selesai")}
          >
            <Text
              className={` text-sm text-center ${
                activeStatus === "selesai" ? "font-ibold" : "text-soil"
              }`}
            >
              Selesai
            </Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row h-[1] bg-borderCustom'>
          <View
            className={` rounded-xl ${
              activeStatus === "berlangsung"
                ? "w-1/2 h-[4] bg-soil"
                : "w-1/2 bg-gray-200 mr-1/2"
            }`}
          ></View>
          <View
            className={` rounded-xl ${
              activeStatus === "selesai"
                ? "w-1/2 h-[4] bg-soil"
                : "w-1/2 bg-gray-200 ml-1/2"
            }`}
          ></View>
        </View>
      </View>
    </View>
  );
};

export default TransactionStatusBar;
