import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const TransaksiSlideBerlangsung = ({ data, onFilterChange, titleSlide }) => {
  const userRole = useSelector((state) => state.auth.role);

  console.log("--------user role: ", userRole);

  const [activeButton, setActiveButton] = useState("terdekat");

  const handleButtonPress = (filter) => {
    setActiveButton(filter);
    onFilterChange(filter);
  };

  return (
    <View>
      <ScrollView
        horizontal
        className='flex-grow flex-row '
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          className={`py-[16.5] ml-4 rounded-xl items-center px-5 ${
            activeButton === "terdekat" ? "bg-soil" : "bg-transparent"
          } border-[1.5px] border-soil`}
          onPress={() => handleButtonPress("terdekat")}
        >
          <Text
            className={`font-isemibold text-sm ${
              activeButton === "terdekat" ? "text-white" : "text-soil"
            }`}
          >
            Pendakian Terdekat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-[16.5] ml-4 rounded-xl items-center px-5 ${
            activeButton === "pembayaran" ? "bg-soil" : "bg-transparent"
          } border-[1.5px] border-soil`}
          onPress={() => handleButtonPress("pembayaran")}
        >
          <Text
            className={`font-isemibold text-sm ${
              activeButton === "pembayaran" ? "text-white" : "text-soil"
            }`}
          >
            Menunggu Pembayaran
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-[16.5] mx-4 rounded-xl items-center px-5 ${
            activeButton === "approve" ? "bg-soil" : "bg-transparent"
          } border-[1.5px] border-soil`}
          onPress={() => handleButtonPress("approve")}
        >
          <Text
            className={`font-isemibold text-sm ${
              activeButton === "approve" ? "text-white" : "text-soil"
            }`}
          >
            {userRole === "ROLE_GUIDE"
              ? "Butuh Persetujuan"
              : "Menunggu Persetujuan"
            }
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TransaksiSlideBerlangsung;
