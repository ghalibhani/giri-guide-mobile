// TourGuideCard.js
import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "../../components/miniComponent/CustomButton"; // Pastikan path ini sesuai dengan file CustomButton Anda

const TourGuideCard = ({
  guideName,
  mountainName,
  hikingPoint,
  numHikers,
  numPorters,
  numDays,
  dateRange,
  price,
  onPressDetail,
  imageUrl,
  buttonRating,
  status,
}) => {
  const getImageSource = () => {
    if (imageUrl) {
      return { uri: imageUrl };
    }
    return require("../../assets/profile-image.jpg");
  };

  return (
    <View className='bg-white p-6 rounded-xl mb-4'>
      <View className='flex-row items-center'>
        <Image className='w-[64] h-[64] rounded-xl' source={getImageSource()} />
        <View className='ml-4'>
          <Text className='font-isemibold mb-[10] text-soil text-base'>
            {guideName}
          </Text>
          <Text className='font-imedium mb-[5] text-thistle text-base'>
            {mountainName} - {hikingPoint}
          </Text>
          <Text className='font-iregular text-soil text-sm'>
            {numHikers} Pendaki - {numPorters} Porter - {numDays} hari
          </Text>
        </View>
      </View>
      <View className='flex-row justify-between mt-[10]'>
        <View>
          <Text className='font-iregular mb-[10] text-thistle text-sm'>
            {dateRange}
          </Text>
          <Text className='font-ibold text-soil text-base'>Rp. {price}</Text>
        </View>
        <CustomButton
          title={
            status === "ONNEARBY"
              ? "Lihat Detail"
              : status === "ONWAITINGPAY"
              ? "Bayar"
              : "Lihat Detail"
          }
          customStyle='bg-evergreen justify-center px-6'
          buttonHandling={onPressDetail}
        />
      </View>
      {buttonRating}
    </View>
  );
};

export default TourGuideCard;
