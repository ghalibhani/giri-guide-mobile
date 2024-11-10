import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import CustomButton from "../../../components/miniComponent/CustomButton";
import CatatanUntukTourGuide from "../../../components/miniComponent/CatatanUntukTourGuide";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch } from "react-redux";
import { updatingTransactionStatus } from "../../../redux/transactionSlice";
import CustomModalConfirmation from "../../../components/miniComponent/CustomModalConfirmation";
import CustomModalSuccess from "../../../components/miniComponent/CustomModalSuccess";

export default function transBeriPersetujuan() {
  const {id} = useLocalSearchParams()

  const dispatch = useDispatch()

  const [isApproved, setIsApproved] = useState(true)
  const [rejectedNote, setRejectedNote] = useState('')
  const [isModalConfirmationVisible, setIsModalConfirmationVisible] = useState(false)
  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false)

  const [isNoteValid, setIsNoteValid] = useState(false)
  // console.log(isApproved)

  useEffect(() => {
    // console.log("Rejected Note:", rejectedNote);
    setIsNoteValid(rejectedNote.length >= 20 && rejectedNote.length <= 150);
  }, [rejectedNote]);

  const showModalConfirmation = () => {
    setIsModalConfirmationVisible(true)
  }

  const handleCancelCorfirmation = () => {
    setIsModalConfirmationVisible(false)
  }

  const handleDone = () => {
    setIsModalSuccessVisible(false)
    router.replace('/transaction')
  }

  const handleGiveApproval = async() => {
    try{
      const dataBody = {
        status: isApproved ? "waiting_pay" : "rejected",
        rejectedNote: isApproved ? "" : rejectedNote,
      }
      // console.log(dataBody)
      await dispatch(updatingTransactionStatus({dataBody, transactionId: id})).unwrap()
      setIsModalConfirmationVisible(false)
      setRejectedNote('')
      setIsModalSuccessVisible(true)
      setIsApproved(true)
    } catch(error) {
      console.error("Error in transBeriPersetujuan: ", error)
    }
  }

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='bg-soil pb-7 rounded-b-verylarge'>
          <HeaderSubMenu title={"Beri Persetujuan"} />
        </View>
        <View className='gap-8 flex flex-row justify-center'>

          <TouchableOpacity className={`px-4 ${isApproved ? 'bg-soil' : 'bg-white'} border-soil border-2 py-[16.5] gap-2 rounded-xl flex-row items-center justify-center`} onPress={() => setIsApproved(!isApproved)}>
            <Text className={`${isApproved ? 'text-white' : 'text-soil'} font-isemibold text-sm`}>Terima Pendakian</Text>
          </TouchableOpacity>

          <TouchableOpacity className={`px-4 ${!isApproved ? 'bg-soil' : 'bg-white'} border-soil border-2 py-[16.5] gap-2 rounded-xl flex-row items-center justify-center`} onPress={() => setIsApproved(!isApproved)}>
            <Text className={`${!isApproved ? 'text-white' : 'text-soil'} font-isemibold text-sm`}>Tolak Pendakian</Text>
          </TouchableOpacity>
        </View>
        <CatatanUntukTourGuide
          title={"Berikan alasan penolakan"}
          isEditable={!isApproved}
          catatan={rejectedNote}
          setCatatan={setRejectedNote}
        />
        <CustomButton
          title={"Kirim tanggapanmu"}
          customStyle={`mx-6 ${isApproved ? "bg-soil" : isNoteValid ? "bg-soil" : "bg-gray-300"}`}
          buttonHandling={showModalConfirmation}
          isDisabled={isApproved ? false : isNoteValid ? false : true}
        />
      </View>

      <CustomModalConfirmation isModalVisible={isModalConfirmationVisible} handleCancel={handleCancelCorfirmation} handleConfirm={handleGiveApproval}>
          <Text className="text-base mb-4 font-iregular text-evergreen text-center">
              Apakah Anda yakin {isApproved ? 'menyetujui' : 'menolak' } pendakian ini? Jika ya, Anda tidak dapat mengubahnya lagi.
          </Text>
      </CustomModalConfirmation>

      <CustomModalSuccess isModalVisible={isModalSuccessVisible} handleDone={handleDone}>
          <Text className="text-base mb-4 font-iregular text-evergreen text-center">
            {isApproved ? 'Yeay! Berhasil menyetujui pendakian. Silahkan menunggu maksimal 24 jam untuk menunggu pembayaran oleh calon pendaki' : 'Yahhh. Mungkin di lain waktu kamu bisa menyanggupi permintaan pendakian ya!'}
          </Text>
        </CustomModalSuccess>
    </SafeAreaView>
  );
}
