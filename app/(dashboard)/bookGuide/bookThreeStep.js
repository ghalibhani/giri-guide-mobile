import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CardKeteranganSewaTourGuide from "../../../components/bookingTourGuide/CardKeteranganSewaTourGuide";
import HeaderSewaTourGuide from "../../../components/bookingTourGuide/HeaderSewaTourGuide";
import DetailCalonPendaki from "../../../components/bookingTourGuide/DetailCalonPendaki";
import JasaPorter from "../../../components/bookingTourGuide/JasaPorter";
import CustomButton from "../../../components/miniComponent/CustomButton";
import ReviewPembayaran from "../../../components/bookingTourGuide/ReviewPembayaran";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const SewaTourGuideTigaTahap = () => {
  const [catatanTourGuide, setCatatanTourGuide] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const navigation = useNavigation();

  const tahapPorterHandler = async () => {
    try {
      setCurrentStage(2);
    } catch (error) {
      console.error("Error in tahapPorterHandler:", error);
    }
  };

  const tahapReviewHandler = () => {
    try {
      setCurrentStage(3);
    } catch (error) {
      console.error("Error in tahapReviewHandler:", error);
    }
  };

  const tahapAjukanHandler = () => {
    try {
      router.replace("/transaction");
    } catch (error) {
      console.error("Error in tahapAjukanHandler:", error);
    }
  };

  return (
    <SafeAreaView className='bg-soil flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='ml-6 mt-5'>
        <HeaderSewaTourGuide />
      </View>

      <View className='flex-row gap-9 mt-8 mb-6 mx-6 justify-around px-5'>
        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 1
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>1</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 1 ? "text-daisy" : "text-ivory"
              }`}
            >
              Daftar
            </Text>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 1 ? "text-daisy" : "text-ivory"
              }`}
            >
              Pendaki
            </Text>
          </View>
        </View>

        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 2
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>2</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 2 ? "text-daisy" : "text-ivory"
              }`}
            >
              Porter
            </Text>
          </View>
        </View>

        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 3
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>3</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 3 ? "text-daisy" : "text-ivory"
              }`}
            >
              Review
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View className='ml-6 mr-6 mb-5'>
          <CardKeteranganSewaTourGuide />
        </View>

        {currentStage === 1 && (
          <View className='flex-col bg-grayCustom mt-auto justify-between rounded-t-verylarge px-6 pt-5'>
            <DetailCalonPendaki continueHandling={tahapPorterHandler} />
          </View>
        )}

        {currentStage === 2 && (
          <View className=' flex-col bg-grayCustom flex-1 rounded-t-verylarge'>
            <JasaPorter continueHandling={tahapReviewHandler} />
          </View>
        )}

        {currentStage === 3 && (
          <View className=' flex-col bg-grayCustom flex-1 rounded-t-verylarge'>
            <ReviewPembayaran
              continueHandling={tahapAjukanHandler}
              catatan={catatanTourGuide}
              setCatatan={setCatatanTourGuide}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SewaTourGuideTigaTahap;

const styles = StyleSheet.create({});
