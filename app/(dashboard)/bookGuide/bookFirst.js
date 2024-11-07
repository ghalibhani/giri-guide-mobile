import { Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormTanggalCounter from "../../../components/miniComponent/FormTanggalCounter";
import CardKeteranganSewaTourGuide from "../../../components/bookingTourGuide/CardKeteranganSewaTourGuide";
import HeaderSewaTourGuide from "../../../components/bookingTourGuide/HeaderSewaTourGuide";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import CustomModalConfirmation from "../../../components/miniComponent/CustomModalConfirmation";

const SewaTourGuideTahapStart = () => {

  const {tourGuideId, hikingPointId, hikingPointName, mountainName, tourGuideName, totalPorter, maxHiker, mountainId} = useLocalSearchParams();

  console.log(`ini dari bookfirst guide: tourGuideId= ${tourGuideId}, hikingPointId=${hikingPointId}, hikingPointName=${hikingPointName}, mountainName=${mountainName}, tourGuideName=${tourGuideName}, totalPorter=${totalPorter}, maxhiker=${maxHiker}`)

  const [count, setCount] = useState(1)

  const initialDate = moment().add(7, 'days').toDate()
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(initialDate);

  const [isModalVisible, setIsModalVisible] = useState(false)

  const continueHandling = () => {
    setIsModalVisible(true)
  };

  const handleConfirm = () => {
    setIsModalVisible(false)
    const parsedStartDate = new Date(startDate)
    const parsedEndDate = new Date(endDate)
    router.push(`/bookGuide/bookThreeStep?tourGuideId=${tourGuideId}&hikingPointId=${hikingPointId}&hikingPointName=${hikingPointName}&mountainName=${mountainName}&tourGuideName=${tourGuideName}&totalPorter=${totalPorter}&fixedHikerCount=${count}&startDate=${parsedStartDate}&endDate=${parsedEndDate}&mountainId=${mountainId}`);
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <SafeAreaView className='bg-soil flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='ml-6 mt-5'>
        <HeaderSewaTourGuide />
      </View>

      <View className='ml-6 mt-6 mr-6 mb-5'>
        <CardKeteranganSewaTourGuide 
          hikingPointName={hikingPointName}
          mountainName={mountainName}
          tourGuideName={tourGuideName}
        />
      </View>

      <View className=' flex-col bg-grayCustom flex-1 justify-between rounded-t-verylarge px-6 pt-5'>
        <FormTanggalCounter 
          maxHiker={maxHiker}
          count={count}
          setCount={setCount}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          initialDate={initialDate}  
        />

        <View className='mb-4'>
          <CustomButton
            buttonHandling={continueHandling}
            customStyle='bg-soil min-w-full'
            title='Lanjutkan'
          />
        </View>
      </View>

      <CustomModalConfirmation isModalVisible={isModalVisible} handleCancel={handleCancel} handleConfirm={handleConfirm}>
        <Text className="text-base mb-4 font-iregular text-evergreen text-center">
          Apakah Anda yakin memilih tanggal 
          
          <Text className="font-ibold">
            {' '} {moment(startDate).format('DD MMM YYYY')} {' '}
          </Text>

          hingga 

          <Text className="font-ibold">
            {' '} {moment(endDate).format('DD MMM YYYY')} {' '}
          </Text>

          dengan jumlah pendaki

          <Text className="font-ibold">
            {' '} {count} orang?
          </Text>
        </Text>
      </CustomModalConfirmation>

    </SafeAreaView>
  );
};

export default SewaTourGuideTahapStart;

const styles = StyleSheet.create({});
