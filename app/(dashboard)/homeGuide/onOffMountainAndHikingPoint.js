import { View, Text, StatusBar, Modal, ScrollView, Image } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableOpacity } from "react-native";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTourGuideProfileHikingPointsByUserId,
  toggleTourGuideHikingPoint,
  toggleTourGuideOnOrOff,
} from "../../../redux/tourGuideSlice";
import { useFocusEffect } from "@react-navigation/native";

const OnOffMountainAndHikingPointScreen = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const { tourGuides } = useSelector((state) => state.tourGuide);
  const statusTourGuides = useSelector((state) => state.tourGuide.status);
  const [isTourGuideActive, setIsTourGuideActive] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (userId) {
        dispatch(fetchTourGuideProfileHikingPointsByUserId(userId)).unwrap();
      }
      const loadingTimeout = setTimeout(() => setLoading(false), 1000);

      return () => clearTimeout(loadingTimeout);
    }, [userId, dispatch])
  );

  useEffect(() => {
    if (statusTourGuides === "succeed" && tourGuides.length > 0) {
      setLoading(false);
    }
  }, [statusTourGuides]);

  const showModalConfirmation = () => {
    setIsModalVisible(true);
  };

  const closeModalConfirmation = () => {
    setIsModalVisible(false);
  };

  const saveHandler = async () => {
    setIsModalVisible(false);
    setLoading(true);

    try {
      const response = await dispatch(toggleTourGuideOnOrOff(userId)).unwrap();
      if (response.data && typeof response.data.isActive === "boolean") {
        const tourGuideStatus = response.data.isActive;
        setIsTourGuideActive(tourGuideStatus);

        if (!tourGuideStatus) {
          // When the tour guide is deactivated, set all hiking point toggles to inactive
          await Promise.all(
            tourGuides.map((guide) =>
              dispatch(
                toggleTourGuideHikingPoint({
                  tourGuideId: userId,
                  hikingPointId: guide.id,
                  isActive: false,
                })
              )
            )
          );
          await dispatch(
            fetchTourGuideProfileHikingPointsByUserId(userId)
          ).unwrap();
        }
      }
    } catch (error) {
      console.log("Error toggling tour guide status", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePower = () => {
    showModalConfirmation();
  };

  const ToggleSwitch = ({ isActive, onToggle }) => (
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

  const DetailMountainAndHikingPoint = ({ item }) => {
    const [isActive, setIsActive] = useState(
      isTourGuideActive && item.isActive
    );

    // const handleToggle = () => {
    //   const newStatus = !isActive;
    //   setIsActive(newStatus);

    //   dispatch(
    //     toggleTourGuideHikingPoint({
    //       tourGuideId: userId,
    //       hikingPointId: item.id,
    //       isActive: newStatus,
    //     })
    //   );
    //   dispatch(fetchTourGuideProfileHikingPointsByUserId(userId)).unwrap();
    // };

    const handleToggle = () => {
      const newStatus = !isActive;
      setIsActive(newStatus);

      dispatch(
        toggleTourGuideHikingPoint({
          tourGuideId: userId,
          hikingPointId: item.id,
          isActive: newStatus,
        })
      )
        .unwrap()
        .then(() => {
          return dispatch(
            fetchTourGuideProfileHikingPointsByUserId(userId)
          ).unwrap();
        })
        .catch((error) => {
          console.error(
            "Gagal mengupdate status atau fetch data terbaru:",
            error
          );
          setIsActive(!newStatus);
        });
    };

    return (
      <View className='border-borderCustom border-[1px] bg-white rounded-xl mx-6 px-5 py-5 flex-row justify-between items-center'>
        <View className='flex-row items-center gap-[15] max-w-[70%]'>
          <FontAwesome6 name='mountain-sun' size={20} color={"#ECD768"} />
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

  const ModalActiveNonActiveTourGuide = () => (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={closeModalConfirmation}
    >
      <View className='flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]'>
        <View className='gap-6 rounded-verylarge bg-white px-6 py-6 mx-6'>
          <Text className='text-center font-isemibold text-base text-evergreen'>
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

  return (
    <SafeAreaView className='flex-1'>
      {isModalVisible && <ModalActiveNonActiveTourGuide />}

      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='flex-1 bg-grayCustom'>
        <View className='flex-row justify-between items-center bg-soil px-6 pt-10 pb-7 rounded-b-verylarge mb-5'>
          <TouchableOpacity
            onPress={() => router.back()}
            className='bg-ivory w-[30] h-[30] items-center justify-center rounded-full'
          >
            <Ionicons name='chevron-back' size={15} color={"#503A3A"} />
          </TouchableOpacity>

          <Text className='color-ivory text-xl font-isemibold'>
            Gunung dan Titik
          </Text>

          <TouchableOpacity
            className='rounded-full bg-ivory w-[30] h-[30] items-center justify-center'
            onPress={handleTogglePower}
          >
            <Ionicons
              name='power'
              color={isTourGuideActive ? "#298267" : "#ED3241"}
              size={18}
            />
          </TouchableOpacity>
        </View>

        <Text className='font-ibold text-soil px-6 mb-3'>
          Detail Gunung dan Titik Pendakian
        </Text>

        <ScrollView>
          <View className='gap-y-5'>
            {tourGuides.map((item) => (
              <DetailMountainAndHikingPoint key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OnOffMountainAndHikingPointScreen;
