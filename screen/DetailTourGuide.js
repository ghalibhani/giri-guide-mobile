import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MountainButtonGuide from "../components/MountainButtonGuide";
import ClimbingPointButton from "../components/ClimbingPointButton";
import { FlatList } from "react-native";

export default function DetailTourGuide() {
  const mountains = [
    {
      id: 1,
      title: "Gunung Bromo",
    },
    {
      id: 2,
      title: "Gunung Bromo",
    },
    {
      id: 3,
      title: "Gunung Bromo",
    },
    {
      id: 4,
      title: "Gunung Bromo",
    },
  ];

  return (
    <ScrollView>
      <View className='flex-1' style={{ backgroundColor: "#f8f8f8" }}>
        <TouchableOpacity className='bg-ivory w-[30] h-[30] absolute top-5 left-6 z-10 items-center justify-center rounded-full'>
          <View className='justify-center items-center'>
            <Ionicons name={"chevron-back"} size={15} color={"#503A3A"} />
          </View>
        </TouchableOpacity>
        <Image
          className='h-[180] w-screen rounded-b-3xl'
          source={require("../assets/gunung-tour-guide.jpg")}
        />
        <Image
          className='w-24 h-24 absolute top-36 left-10 z-10 rounded-full'
          source={require("../assets/profile-image.jpg")}
        />

        <View className='p-6 rounded-b-3xl bg-white'>
          <View className='flex justify-end items-center gap-2 flex-row'>
            <View className='flex flex-row gap-2'>
              <Ionicons name='star-outline' size={20} color='black' />
              <Ionicons name='star-outline' size={20} color='black' />
              <Ionicons name='star-outline' size={20} color='black' />
              <Ionicons name='star-outline' size={20} color='black' />
              <Ionicons name='star-outline' size={20} color='black' />
            </View>
            <Text className='text-plum text-base'>4,0 (12)</Text>
          </View>

          <Text className='text-lg text-soil font-ibold mt-5 mb-4'>
            Nama Tour Guide
          </Text>
          <Text className='text-evergreen text-sm font-iregular'>
            Deskripsi yang benar benar singkat. Ini harus dibatasi maksimal
            karakternya
          </Text>
        </View>

        <View className='bg-white rounded-3xl my-4 p-6'>
          <Text className='text-evergreen font-iregular text-base'>
            <Text className='font-ibold'>475 orang</Text> sudah pernah dipandu
            oleh <Text className='font-ibold'>Nama Tour Guide </Text>
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
              data={mountains}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className='w-2' />}
              renderItem={({ item }) => (
                <MountainButtonGuide title={item.title} />
              )}
            />
          </View>

          {/* list titik pendakian */}
          <View className='flex flex-row gap-2'>
            <View className='flex flex-col gap-2 mt-4'>
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
            </View>
            <View className='flex flex-col gap-2 mt-4'>
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
              <ClimbingPointButton title={"Titik Pendakian"} />
            </View>
          </View>
        </View>

        {/* rating ulasan */}
        <View className='bg-white rounded-3xl my-4 p-6'>
          <Text className='text-lg text-soil font-ibold'>
            Rating dan Ulasan
          </Text>

          <View className='flex flex-row gap-6 items-center mt-4'>
            <Text className='text-5xl font-isemibold text-evergreen'>4,5</Text>
            <View>
              <View className='flex flex-row gap-2 mb-2'>
                <Ionicons name='star-outline' size={22} color='black' />
                <Ionicons name='star-outline' size={22} color='black' />
                <Ionicons name='star-outline' size={22} color='black' />
                <Ionicons name='star-outline' size={22} color='black' />
                <Ionicons name='star-outline' size={22} color='black' />
              </View>
              <Text className='text-evergreen text-sm font-iregular'>
                26 Ulasan
              </Text>
            </View>
          </View>

          <View className='flex flex-row items-center gap-5 mt-6'>
            <Image
              className='w-10 h-10 rounded-full'
              source={require("../assets/profile-image.jpg")}
            />
            <View>
              <Text className='text-soil text-sm font-ibold mb-1'>
                Nama reviewer
              </Text>
              <Text className='text-evergreen opacity-80 text-sm font-isemibold'>
                19 Okt 2024
              </Text>
            </View>
          </View>
          <Text className='text-evergreen font-iregular text-sm mt-5'>
            Tour guide akan memandu Anda di titik pendakian pilihan, memberikan
            rute yang aman dan tips mendaki. Nikmati pengalaman mendaki yang
            menyenangkan, lengkap dengan informasi seputar jalur, alam, dan
            keunikan lokasi. INI MAKSIMAL 150 KARAKTER
          </Text>
          <View className='bg-borderCustom h-[1] my-5'></View>
          <TouchableOpacity>
            <Text className='text-evergreen font-isemibold text-sm text-right'>
              Lihat Selengkapnya
            </Text>
          </TouchableOpacity>
        </View>

        {/* rincian biaya */}
        <View className='bg-white rounded-3xl p-6'>
          <View className='bg-ivory py-4 px-6 rounded-verylarge'>
            <Text className='text-soil text-sm font-iregular'>
              Tour guide ini menyediakan{" "}
              <Text className='font-ibold'>10 porter</Text> (ini tidak wajib
              dipilih)
            </Text>
          </View>
          <Text className='text-lg font-ibold my-4 text-soil'>
            Rincian Biaya
          </Text>
          <View className='bg-borderCustom h-[1]'></View>
          <View className='flex flex-row justify-between gap-2 mt-4'>
            <Text className='text-thistle font-iregular text-sm'>
              Jasa tour guide / hari
            </Text>
            <Text className='text-soil font-iregular text-sm'>Rp. 130.000</Text>
          </View>
          <View className='flex flex-row justify-between gap-2 mt-4'>
            <Text className='text-thistle font-iregular text-sm'>
              Uang masuk gunung / orang
            </Text>
            <Text className='text-soil font-iregular text-sm'>Rp. 30.000</Text>
          </View>
          <View className='flex flex-row justify-between gap-2 mt-4'>
            <Text className='text-thistle font-iregular text-sm'>
              Pengurusan SIMAKSI / orang
            </Text>
            <Text className='text-soil font-iregular text-sm'>Rp. 100.000</Text>
          </View>
          <View className='bg-borderCustom h-[1] my-4'></View>
          {/* total */}
          <View className='flex flex-row justify-between gap-2'>
            <Text className='font-ibold text-sm text-evergreen'>Total</Text>
            <Text className='font-ibold text-sm text-evergreen'>
              Rp. 1.000.000
            </Text>
          </View>
          <Text className='mt-6 mb-5 text-sm font-iregular text-evergreen'>
            Berikut merupakan porter maupun tambahan biaya jasa tour guide
            apabila ada tambahan orang. Satu orang porter hanya mampu mengangkat
            beban maksimal 25 kg.
          </Text>
          <View className='flex flex-row justify-between gap-2'>
            <Text className='w-2/3 text-thistle text-sm font-iregular'>
              Jasa tour guide per penambahan satu orang calon pendaki
            </Text>
            <Text className='text-soil text-sm font-iregular'>Rp. 50.000</Text>
          </View>
          <View className='flex flex-row justify-between gap-2 mt-4'>
            <Text className=' text-thistle font-iregular text-sm'>
              Jasa per porter
            </Text>
            <Text className='text-soil text-sm font-iregular'>Rp. 30.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
