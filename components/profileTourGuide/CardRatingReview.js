import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Star from "../Star";

const CardRatingReview = ({ averageData, data }) => {
  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <View className='bg-white rounded-verylarge my-4 p-6'>
      <Text className='text-lg text-soil font-ibold'>Rating dan Ulasan</Text>

      <View className='flex flex-row gap-6 items-center mt-4'>
        <Text className='text-5xl font-isemibold text-evergreen'>
          {averageData?.rating}
          {/* {1} */}
        </Text>

        <View>
          <View className='flex flex-row gap-2 mb-2'>
            <Star star={averageData?.rating} />
          </View>

          <Text className='text-evergreen text-sm font-iregular'>
            {averageData?.totalReview} Ulasan
          </Text>
        </View>
      </View>

      <View className='flex flex-row items-center gap-5 mt-6'>
        <Image
          className='w-10 h-10 rounded-full'
          source={require("../../assets/profile-image.jpg")}
        />

        <View>
          <Text className='text-soil text-sm font-ibold mb-1'>
            {data?.customerName}
          </Text>
          <Text className='text-evergreen opacity-80 text-sm font-isemibold'>
            {data?.createdAt
              ? formattedDate(new Date(data.createdAt))
              : "Tanggal review"}
          </Text>
        </View>
      </View>

      <Text className='text-evergreen font-iregular text-sm mt-5'>
        {data?.review}
      </Text>

      <View className='bg-borderCustom h-[1] my-5'></View>

      <TouchableOpacity
        onPress={() => {
          router.navigate(
            `/detailGuide/listReview?tourGuideId=${data?.tourGuideId}`
          );
        }}
      >
        <Text className='text-evergreen font-isemibold text-sm text-right'>
          Lihat Selengkapnya
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardRatingReview;
