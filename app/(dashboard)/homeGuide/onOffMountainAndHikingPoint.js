import { View, Text, StatusBar, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/miniComponent/CustomButton'

const OnOffMountainAndHikingPointScreen = ({data}) => {
  const tourGuideName = "Giri Guide Name";
  const [isTourGuideActive, setIsTourGuideActive] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const data2 = [
    {
      id: 1,
      mountainName: "Gunung Semeru",
      hikingPoint: "Ranu Pani",
      status: "active"
    },
    {
      id: 2,
      mountainName: "Gunung Bromo",
      hikingPoint: "Cemoro Lawang",
      status: "active"
    },
    {
      id: 3,
      mountainName: "Gunung Arjuno",
      hikingPoint: "Tretes",
      status: "inactive"
    },
    {
      id: 4,
      mountainName: "Gunung Arjuno",
      hikingPoint: "Lawang",
      status: "active"
    },
    {
      id: 5,
      mountainName: "Gunung Welirang",
      hikingPoint: "Tretes",
      status: "inactive"
    },
    {
      id: 6,
      mountainName: "Gunung Panderman",
      hikingPoint: "Batu",
      status: "inactive"
    },
    {
      id: 7,
      mountainName: "Gunung Raung",
      hikingPoint: "Kalibaru",
      status: "active"
    },
    {
      id: 8,
      mountainName: "Gunung Ijen",
      hikingPoint: "Paltuding",
      status: "inactive"
    },
    {
      id: 9,
      mountainName: "Gunung Kawi",
      hikingPoint: "Wonosari",
      status: "inactive"
    },
    {
      id: 10,
      mountainName: "Gunung Kelud",
      hikingPoint: "Desa Sugihwaras",
      status: "active"
    },
    {
      id: 11,
      mountainName: "Gunung Argopuro",
      hikingPoint: "Bremi",
      status: "active"
    },
    {
      id: 12,
      mountainName: "Gunung Argopuro",
      hikingPoint: "Baderan",
      status: "inactive"
    },
    {
      id: 13,
      mountainName: "Gunung Wilis",
      hikingPoint: "Desa Ngliman",
      status: "active"
    },
    {
      id: 14,
      mountainName: "Gunung Penanggungan",
      hikingPoint: "Tamiajeng",
      status: "inactive"
    },
    {
      id: 15,
      mountainName: "Gunung Gede",
      hikingPoint: "Malang Batu",
      status: "active"
    }
  ];

  const showModalConfirmation = () => {
    setIsModalVisible(true)
  }

  const closeModalConfirmation = () => {
      setIsModalVisible(false)
  }

  const saveHandler = () => {
      setIsTourGuideActive(!isTourGuideActive)
      setIsModalVisible(false)
  }

  const formatCurrency = (value) => {
      return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(value)
  }

  const formattedDate = (date) => {
      return new Intl.DateTimeFormat("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric"
      }).format(date);
  }

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const ToggleSwitch = ({ isActive, onToggle }) => {
    return (
      <TouchableOpacity
        onPress={onToggle}
        className={`w-12 h-8 py-1 items-center justify-center rounded-2xl ${isActive ? 'bg-daisy' : 'bg-thistle'} p-1`}
      >
        <View
          className={`w-5 h-5 rounded-full items-center justify-center bg-white ${isActive ? 'ml-auto' : 'mr-auto'}`}
        >
          {isActive ? (
            <MaterialCommunityIcons name="check" size={10} color="#ECD768" />
          ) : (
            <MaterialCommunityIcons name='window-close' size={10} color={"#91A0B8"} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const DetailMountainAndHikingPoint = ({item}) => {
    const [isActive, setIsActive] = useState(item.status === "active")
    
    const handleToggle = () => {
      setIsActive(!isActive)
    }

    return (
      <View className="border-borderCustom border-[1px] bg-white rounded-xl mx-6 px-5 py-5 flex-row justify-between items-center">
        <View className="flex-row items-center gap-[15] ">
          <Ionicons name="card" color={"#ECD768"} size={20} />

          <View className="gap-[5]">
              <Text className="font-imedium text-base color-soil">{item.mountainName}</Text>
              <Text className="font-iregular text-sm text-thistle">{item.hikingPoint}</Text>
          </View>
        </View>

        <ToggleSwitch isActive={isActive} onToggle={handleToggle} />
    </View>
    )
  }

  const ModalActiveNonActiveTourGuide = () => {
      return (
          <Modal
              visible={isModalVisible}
              transparent={true}
              animationType='fade'
              onRequestClose={closeModalConfirmation}
          >
            <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]">
              <View className="gap-6 rounded-verylarge bg-white px-6 py-6 mx-6">
                <Text className=" text-center font-isemibold text-base text-evergreen items-center">{isTourGuideActive ? (
                    "Apakah kamu yakin untuk menonaktifkan akun untuk saat ini?"
                ) : (
                    "Apakah kamu yakin untuk mengaktifkan akun untuk saat ini?"
                )}
                </Text>

                <View className="flex-row justify-between">
                    <View className="items-center justify-center flex-1 px-6">
                        <CustomButton
                            buttonHandling={saveHandler}
                            customStyle="bg-successHover w-full"
                            title="Ya"
                        />
                    </View>
                    <View className="items-center justify-center flex-1 px-6">
                        <CustomButton
                            buttonHandling={closeModalConfirmation}
                            customStyle="bg-warningHover w-full"
                            title="Tidak" 
                        />
                    </View>
                </View>
              </View>
            </View>
          </Modal>
      )
  }

  return (
    <SafeAreaView className=' flex-1'>

      {isModalVisible && <ModalActiveNonActiveTourGuide />}

      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      
      <View className="flex-1 bg-grayCustom">
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

          <TouchableOpacity className="rounded-full bg-ivory w-[30] h-[30] items-center justify-center" onPress={showModalConfirmation}>
            <Ionicons name='power' color={`${!isTourGuideActive ? "#ED3241" : "#298267"}`} size={18} />
          </TouchableOpacity>
        </View>

        <Text className="font-ibold text-soil px-6 mb-3">Detail Gunung dan Pemesan</Text>

        <ScrollView>
          <View className="gap-6 mt-3">
            {data2.map((item) => 
              <DetailMountainAndHikingPoint item={item} key={item.id} />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default OnOffMountainAndHikingPointScreen