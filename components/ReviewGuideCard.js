// ReviewCard.js
import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const getImageSource = (imageUser) => {
  if (!imageUser) {
    return require("../assets/profile-image.jpg");
  }

  if (
    typeof imageUser === "string" &&
    (imageUser.startsWith("http") || imageUser.startsWith("https"))
  ) {
    return { uri: imageUser };
  }

  return require("../assets/profile-image.jpg");
};

const ReviewGuideCard = ({
  reviewerName,
  date,
  usePorter,
  reviewText,
  rating,
  imageUser,
}) => {
  return (
    <View className='mt-6 p-6 bg-white rounded-verylarge'>
      <View className='flex-row justify-between items-center'>
        <View className='flex flex-row'>
          <Image
            source={getImageSource(imageUser)}
            className='w-10 h-10 rounded-full'
          />
          <View className='ml-5'>
            <Text className='text-soil text-sm font-ibold'>{reviewerName}</Text>
            <Text className='text-sm text-evergreen font-isemibold'>
              {date}
            </Text>
          </View>
        </View>
        <View className='flex flex-row gap-2'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Ionicons
              key={index}
              name={index < rating ? "star" : "star-outline"}
              size={20}
              color='black'
            />
          ))}
        </View>
      </View>
      <Text className='text-evergreen text-sm font-iregular my-4'>
        Penggunaan porter: {usePorter ? "ya" : "tidak"}
      </Text>
      <Text className='text-evergreen text-sm font-iregular'>{reviewText}</Text>
    </View>
  );
};

export default ReviewGuideCard;
