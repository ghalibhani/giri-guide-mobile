import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import CustomButton from "../../../components/miniComponent/CustomButton";
import CatatanUntukTourGuide from "../../../components/miniComponent/CatatanUntukTourGuide";

export default function transBeriPersetujuan() {
  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='bg-soil pb-7 rounded-b-verylarge'>
          <HeaderSubMenu title={"Detail Transaksi"} />
        </View>
        <View className='gap-8 flex flex-row justify-center'>
          <CustomButton
            customStyle={"bg-soil px-4"}
            title={"Terima Pendakian"}
          />
          <CustomButton
            customStyle={"bg-soil px-4"}
            title={"Tolak Pendakian"}
          />
        </View>
        <CatatanUntukTourGuide
          title={"Ceritakan pengalamanmu dipandu tour guide ini"}
        />
        <CustomButton
          title={"Kirim tanggapanmu"}
          customStyle={"bg-soil mx-6"}
        />
      </View>
    </SafeAreaView>
  );
}
