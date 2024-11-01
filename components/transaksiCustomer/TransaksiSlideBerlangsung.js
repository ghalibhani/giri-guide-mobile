import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const TransaksiSlideBerlangsung = ({ data, buttonHandling }) => {
  return (
    <View>
      <ScrollView
        horizontal
        className='flex-grow flex-row '
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          className='py-[16.5] ml-4 rounded-xl items-center px-5 bg-soil border-[1.5px] border-soil'
          onPress={buttonHandling}
        >
          <Text className='font-isemibold text-sm text-white'>
            Pendakian Terdekat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='py-[16.5] ml-4 rounded-xl items-center px-5 bg-transparent border-[1.5px] border-soil'
          onPress={buttonHandling}
        >
          <Text className='font-isemibold text-sm text-soil'>
            Menunggu Pembayaran
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='py-[16.5] mx-4 rounded-xl items-center px-5 bg-transparent border-[1.5px] border-soil'
          onPress={buttonHandling}
        >
          <Text className='font-isemibold text-sm text-soil'>
            Proses Approve
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TransaksiSlideBerlangsung;

