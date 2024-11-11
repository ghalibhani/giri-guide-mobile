import { ScrollView, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const TransaksiSlideSelesai = ({ onFilterChange }) => {
  const [activeButton, setActiveButton] = useState("selesai");
  const userRole = useSelector((state) => state.auth.role);

  const handleButtonPress = (filter) => {
    setActiveButton(filter);
    onFilterChange(filter);
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          className={`py-[16.5] ml-4 rounded-xl items-center px-5 ${
            activeButton === "selesai" ? "bg-soil" : "bg-transparent"
          } border-[1.5px] border-soil`}
          onPress={() => handleButtonPress("selesai")}
        >
          <Text
            className={`font-isemibold text-sm ${
              activeButton === "selesai" ? "text-white" : "text-soil"
            }`}
          >
            Selesai mendaki
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-[16.5] ml-4 rounded-xl items-center px-5 ${
            activeButton === "ditolak" ? "bg-soil" : "bg-transparent"
          } border-[1.5px] border-soil`}
          onPress={() => handleButtonPress("ditolak")}
        >
          <Text
            className={`font-isemibold text-sm ${
              activeButton === "ditolak" ? "text-white" : "text-soil"
            }`}
          >
            {userRole === "ROLE_GUIDE"
              ? "Ditolak"
              : "Ditolak"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TransaksiSlideSelesai;
