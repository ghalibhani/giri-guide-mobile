import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import RatingTourGuideCard from "../../../components/transaksiCustomer/RatingTourGuideCard";
import CatatanUntukTourGuide from "../../../components/miniComponent/CatatanUntukTourGuide";
import CustomButton from "../../../components/miniComponent/CustomButton";

export default function beriRating() {
  return (
    <SafeAreaView className='flex-1 bg-grayCustom'>
      <StatusBar barStyle='light-content' backgroundColor='#503A3A' />
      <View className='bg-soil pb-7 rounded-b-verylarge mb-5'>
        <HeaderSubMenu title={"Beri Rating"} />
      </View>

      <RatingTourGuideCard guideName={"Budi"}></RatingTourGuideCard>
      <CatatanUntukTourGuide
        title={"Ceritakan pengalamanmu dipandu tour guide ini"}
      ></CatatanUntukTourGuide>
      <CustomButton
        title={"Kirim ulasanmu"}
        customStyle={"bg-soil mx-6 mt-6"}
      />
    </SafeAreaView>
  );
}
