import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MountainButtonGuide from "../../../components/MountainButtonGuide";
import { FlatList } from "react-native";
import CardRatingReview from "../../../components/profileTourGuide/CardRatingReview";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTourGuide } from "../../../redux/tourGuideSlice";
import Star from "../../../components/Star";
import { useState } from "react";
import CostDetailItem from "../../../components/miniComponent/CostDetailItem";

// ada di folder detailGuide

export default function DetailTourGuideScreen() {
  const dispatch = useDispatch();
  const tourGuide = useSelector((state) => state.tourGuide);
  const [showHikingPoints, setShowHikingPoints] = useState([]);
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [selectedClimbingPoint, setSelectedClimbingPoint] = useState(null);
  const [climbingPointData, setClimbingPointData] = useState(null);

  useEffect(() => {
    dispatch(fetchTourGuide("f689ec78-85d1-4606-95bc-bbf7c3ecfe20"));
  }, [dispatch]);

  const mountainHandler = (mountainId) => {
    const selectedMountain = tourGuide.mountains.find(
      (mountain) => mountain.mountainId === mountainId
    );

    setSelectedMountain(selectedMountain);
    setShowHikingPoints(selectedMountain?.hikingPoints || []);
    setClimbingPointData(null);
  };

  const climbingPointHandler = (climbingPointId) => {
    setSelectedClimbingPoint(climbingPointId);

    if (selectedMountain) {
      const selectedClimbingPoint = selectedMountain.hikingPoints.find(
        (climbingPoint) => climbingPoint.id === climbingPointId
      );

      if (selectedClimbingPoint) {
        setClimbingPointData(selectedClimbingPoint);
      } else {
        console.log("Titik pendakian tidak ditemukan untuk ID yang dipilih");
      }
    } else {
      console.log("Hiking points tidak ditemukan untuk gunung yang dipilih");
    }
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // console.log(climbingPointData.price);

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar translucent style='auto' />
        <View className='flex-1 pb-24' style={{ backgroundColor: "#f8f8f8" }}>
          <TouchableOpacity className='bg-ivory w-[30] h-[30] absolute top-5 left-6 z-10 items-center justify-center rounded-full'>
            <View className='justify-center items-center'>
              <Ionicons
                name={"chevron-back"}
                size={15}
                color={"#503A3A"}
                onPress={() => router.back()}
              />
            </View>
          </TouchableOpacity>
          <Image
            className='h-[180] w-screen rounded-b-3xl'
            source={require("../../../assets/gunung-tour-guide.jpg")}
          />
          <Image
            className='w-24 h-24 absolute top-36 left-10 z-10 rounded-full'
            source={require("../../../assets/profile-image.jpg")}
          />

          <View className='p-6 rounded-b-3xl bg-white'>
            <View className='flex justify-end items-center gap-2 flex-row'>
              <View className='flex flex-row gap-2'>
                <Star star={tourGuide.rating} />
              </View>
              <Text className='text-plum text-base'>4,0 (12)</Text>
            </View>

            <Text className='text-lg text-soil font-ibold mt-5 mb-4'>
              {tourGuide.name}
            </Text>
            <Text className='text-evergreen text-sm font-iregular'>
              {tourGuide.description}
            </Text>
          </View>

          <View className='bg-white rounded-3xl my-4 p-6'>
            <Text className='text-evergreen font-iregular text-base'>
              <Text className='font-ibold'>
                {tourGuide.totalCustomer} orang
              </Text>{" "}
              sudah pernah dipandu oleh{" "}
              <Text className='font-ibold'>{tourGuide.name} </Text>
              dalam mendaki gunung.
            </Text>
          </View>

          {/* titik pendakian yg dikuasai */}
          <View className='bg-white rounded-3xl p-6'>
            <Text className='text-lg text-soil font-ibold'>
              Titik Pendakian yang Dikuasai
            </Text>

            {/* list nama gunung */}
            <View className='mt-4'>
              <FlatList
                data={tourGuide.mountains}
                keyExtractor={(item) => item.mountainId}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className='w-2' />}
                renderItem={({ item }) => (
                  <MountainButtonGuide
                    onPress={() => mountainHandler(item.mountainId)}
                    title={item.mountainName}
                    customStyle={
                      selectedMountain?.mountainId === item.mountainId
                        ? "bg-soil"
                        : "bg-white "
                    }
                    customTextStyle={
                      selectedMountain?.mountainId === item.mountainId
                        ? "text-white"
                        : "text-soil"
                    }
                  />
                )}
              />
            </View>

            {/* list titik pendakian */}
            <View className='flex flex-row gap-2 mt-4'>
              {showHikingPoints.length > 0 ? (
                showHikingPoints.map((point, index) => (
                  <MountainButtonGuide
                    key={index}
                    onPress={() => climbingPointHandler(point.id)}
                    title={point.name}
                    customStyle={
                      selectedClimbingPoint === point.id
                        ? "bg-soil"
                        : "bg-white "
                    }
                    customTextStyle={
                      selectedClimbingPoint === point.id
                        ? "text-white"
                        : "text-soil"
                    }
                  />
                ))
              ) : (
                <Text className='text-gray-500'>
                  Pilih gunung untuk melihat titik pendakian
                </Text>
              )}
            </View>
          </View>

          {/* rating ulasan */}
          <CardRatingReview
            totalReview={tourGuide.totalReview}
            star={tourGuide.rating}
          />

          {/* rincian biaya */}
          <View className='bg-white rounded-3xl p-6'>
            <View className='bg-ivory py-4 px-6 rounded-verylarge'>
              <Text className='text-soil text-sm font-iregular'>
                Tour guide ini menyediakan{" "}
                <Text className='font-ibold'>
                  {tourGuide.totalPorter} porter
                </Text>{" "}
                (ini tidak wajib dipilih)
              </Text>
            </View>
            <Text className='text-lg font-ibold my-4 text-soil'>
              Rincian Biaya
            </Text>
            <View className='bg-borderCustom h-[1]'></View>
            <CostDetailItem
              label={"Jasa tour guide / hari"}
              amount={formatRupiah(tourGuide.price)}
            />
            <CostDetailItem
              label={"Uang masuk gunung / orang"}
              amount={formatRupiah(climbingPointData?.price || 0)}
            />
            <CostDetailItem
              label={"Pengurusan SIMAKSI / orang"}
              amount={formatRupiah(selectedMountain?.priceSimaksi || 0)}
            />
            <View className='bg-borderCustom h-[1] my-4'></View>
            {/* total */}
            <View className='flex flex-row justify-between gap-2'>
              <Text className='font-ibold text-sm text-evergreen'>Total</Text>
              <Text className='font-ibold text-sm text-evergreen'>
                {" "}
                {formatRupiah(
                  (Number(tourGuide.price) || 0) +
                    (Number(climbingPointData?.price) || 0) +
                    (Number(selectedMountain?.priceSimaksi) || 0)
                )}
              </Text>
            </View>
            <Text className='mt-6 mb-5 text-sm font-iregular text-evergreen'>
              Berikut merupakan porter maupun tambahan biaya jasa tour guide
              apabila ada tambahan orang. Satu orang porter hanya mampu
              mengangkat beban maksimal 25 kg.
            </Text>
            <CostDetailItem
              label={"Jasa tour guide per penambahan satu orang calon pendaki"}
              amount={formatRupiah(tourGuide.additionalPrice)}
              customLabelStyle={"w-2/3"}
            />
            <CostDetailItem
              label={"Jasa per porter"}
              amount={formatRupiah(tourGuide.pricePorter)}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          paddingVertical: 15,
          backgroundColor: "#503a3a",
          borderRadius: 10,
          alignItems: "center",
        }}
        onPress={() => router.push("/bookGuide/bookThreeStep")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
          Sewa Tour Guide Ini
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
