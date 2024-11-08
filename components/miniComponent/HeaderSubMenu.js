import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const HeaderSubMenu = ({ title }) => {
  return (
    <View className='ml-6 mt-5'>
      <View className='flex-row items-center'>
        <TouchableOpacity
          onPress={() => router.back()}
          className='bg-ivory w-[30] h-[30] mt- items-center justify-center rounded-full'
        >
          <View className='justify-center items-center'>
            <Ionicons name={"chevron-back"} size={15} color={"#503A3A"} />
          </View>
        </TouchableOpacity>
        <Text className='color-ivory absolute left-1/2 -translate-x-1/2 text-lg justify-center font-isemibold'>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderSubMenu;

const styles = StyleSheet.create({});
