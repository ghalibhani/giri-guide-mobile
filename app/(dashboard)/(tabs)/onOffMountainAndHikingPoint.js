import { View, Text, StatusBar, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTourGuideProfileHikingPointsByUserId,
  toggleTourGuideHikingPoint,
} from "../../../redux/tourGuideSlice";
import { useEffect } from "react";

const OnOffMountainAndHikingPointScreen = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTourGuideProfileHikingPointsByUserId(userId));
    }
  }, [userId, dispatch]);

  const { tourGuides } = useSelector((state) => state.tourGuide);

  const [isTourGuideActive, setIsTourGuideActive] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalConfirmation = () => {
    setIsModalVisible(true);
  };

  const closeModalConfirmation = () => {
    setIsModalVisible(false);
  };

  const saveHandler = () => {
    setIsModalVisible(false);
  };

  const ToggleSwitch = ({ isActive, onToggle }) => {
    return (
      <TouchableOpacity
        onPress={onToggle}
        className={`w-12 h-8 py-1 items-center justify-center rounded-2xl ${
          isActive ? "bg-daisy" : "bg-thistle"
        } p-1`}
      >
        <View
          className={`w-5 h-5 rounded-full items-center justify-center bg-white ${
            isActive ? "ml-auto" : "mr-auto"
          }`}
        >
          {isActive ? (
            <MaterialCommunityIcons name='check' size={10} color='#ECD768' />
          ) : (
            <MaterialCommunityIcons
              name='window-close'
              size={10}
              color={"#91A0B8"}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const DetailMountainAndHikingPoint = ({ item }) => {
    const [isActive, setIsActive] = useState(item.isActive);

    const handleToggle = () => {
      setIsActive((prev) => {
        const newStatus = !prev;
        dispatch(
          toggleTourGuideHikingPoint({
            tourGuideId: userId,
            hikingPointId: item.id,
            isActive: newStatus,
          })
        );
        return newStatus;
      });
    };

    return (
      <View className='border-borderCustom border-[1px] bg-white rounded-xl mx-6 px-5 py-5 flex-row justify-between items-center'>
        <View className='flex-row items-center gap-[15] '>
          <Ionicons name='card' color={"#ECD768"} size={20} />

          <View className='gap-[5]'>
            <Text className='font-imedium text-base color-soil'>
              {item.mountainName}
            </Text>
            <Text className='font-iregular text-sm w-2/3 text-thistle'>
              {item.hikingPointName}
            </Text>
          </View>
        </View>

        <ToggleSwitch isActive={isActive} onToggle={handleToggle} />
      </View>
    );
  };

  const ModalActiveNonActiveTourGuide = () => {
    return (
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={closeModalConfirmation}
      >
        <View className='flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]'>
          <View className='gap-6 rounded-verylarge bg-white px-6 py-6 mx-6'>
            <Text className=' text-center font-isemibold text-base text-evergreen items-center'>
              {isTourGuideActive
                ? "Apakah kamu yakin untuk menonaktifkan akun untuk saat ini?"
                : "Apakah kamu yakin untuk mengaktifkan akun untuk saat ini?"}
            </Text>

            <View className='flex-row justify-between'>
              <View className='items-center justify-center flex-1 px-6'>
                <CustomButton
                  buttonHandling={saveHandler}
                  customStyle='bg-successHover w-full'
                  title='Ya'
                />
              </View>
              <View className='items-center justify-center flex-1 px-6'>
                <CustomButton
                  buttonHandling={closeModalConfirmation}
                  customStyle='bg-warningHover w-full'
                  title='Tidak'
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView className=' flex-1'>
      {isModalVisible && <ModalActiveNonActiveTourGuide />}

      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='flex-1 bg-grayCustom'>
        <View className='flex-row justify-between items-center bg-soil px-6 pt-10 pb-7 rounded-b-verylarge mb-5'>
          <TouchableOpacity
            onPress={() => router.back()}
            className='bg-ivory w-[30] h-[30] mt- items-center justify-center rounded-full'
          >
            <View className='justify-center items-center'>
              <Ionicons name={"chevron-back"} size={15} color={"#503A3A"} />
            </View>
          </TouchableOpacity>

          <Text className='color-ivory text-xl justify-center font-isemibold'>
            Gunung dan Titik
          </Text>

          <TouchableOpacity
            className='rounded-full bg-ivory w-[30] h-[30] items-center justify-center'
            onPress={showModalConfirmation}
          >
            <Ionicons
              name='power'
              color={`${!isTourGuideActive ? "#ED3241" : "#298267"}`}
              size={18}
            />
          </TouchableOpacity>
        </View>

        <Text className='font-ibold text-soil px-6 mb-3'>
          Detail Gunung dan Titik Pendakian
        </Text>

        <ScrollView>
          <View className='gap-6 mt-3'>
            {tourGuides.map((item) => (
              <DetailMountainAndHikingPoint item={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnOffMountainAndHikingPointScreen;
