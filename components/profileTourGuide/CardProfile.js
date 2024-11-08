import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const getImageSource = (imageUser) => {
  if (!imageUser) {
    return require("../../assets/profile-image.jpg");
  }

  if (
    typeof imageUser === "string" &&
    (imageUser.startsWith("http") || imageUser.startsWith("https"))
  ) {
    return { uri: imageUser };
  }

  return require("../../assets/profile-image.jpg");
};

function formatDecimal(value) {
  return value % 1 === 0 ? `${value.toFixed(1)}` : `${value.toFixed(1)}`;
}

const CardProfile = ({ data }) => {
  return (
    <View className='gap-5'>
      <View className='bg-evergreen rounded-verylarge px-6 pt-8 pb-custom'>
        <View className='items-center gap-4'>
          <View className='relative'>
            <Image
              source={getImageSource(data.image)}
              className='rounded-full w-[100px] h-[100px] border-4 border-white'
            />

            <View className='absolute -bottom-5 left-3 bg-white rounded-full flex-row items-center px-4 py-2 shadow-md'>
              <View className='mr-1'>
                <AntDesign name='star' size={20} color={"#ECD768"} />
              </View>
              <Text className='font-ibold text-soil'>
                {data?.rating ? formatDecimal(data?.rating) : 0}
              </Text>
            </View>
          </View>

          <Text className=' mt-4 font-ibold text-lg text-ivory'>
            {data.name}
          </Text>
        </View>
      </View>

      <View className='bg-white rounded-xl mx-6 px-5 py-5 -mt-32 z-0'>
        <View className='flex-col justify-around gap-4'>
          <View className='items-center gap-[5]'>
            <Text className='text-2xl font-ibold text-evergreen'>
              {data.totalCustomer}
            </Text>
            <Text className='text-xs font-iregular text-thistle'>
              Banyak pendakian yang selesai
            </Text>
          </View>

          <View className='h-[0.5] bg-thistle'></View>

          <View className='flex-row'>
            <View className='items-center gap-[5] w-1/2'>
              <Text className='text-2xl font-ibold text-evergreen'>
                {data.donePercentage}%
              </Text>
              <Text className='text-xs font-iregular text-thistle'>
                Persentase selesai
              </Text>
            </View>

            <View className='w-[0.5] bg-thistle'></View>

            <View className='items-center gap-[5] w-1/2'>
              <Text className='text-2xl font-ibold text-evergreen'>
                {data.rejectPercentage}%
              </Text>
              <Text className='text-xs font-iregular text-thistle'>
                Persentase menolak
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardProfile;
