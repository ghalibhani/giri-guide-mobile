// TourGuideCard.js
import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "../../components/miniComponent/CustomButton";
import moment from "moment";

const TourGuideCard = ({
  guideName = '',
  customerName = '',
  mountainName,
  hikingPoint,
  numHikers,
  numPorters,
  numDays,
  startDate,
  endDate,
  price,
  onPressDetail,
  imageUrl,
  customElements,
  status,
  role,
}) => {
  const getImageSource = () => {
    if (imageUrl) {
      return { uri: imageUrl };
    }
    return require("../../assets/profile-image.jpg");
  };
  // console.log(`ini dari tourguidecard, tourGuideName: ${guideName}, customerName= ${customerName}, role=${role}`)

  const formattedDate = (date) => {
    return moment(date).format('DD-MM-YYYY')
  }

  return (
    <View className='bg-white p-6 rounded-xl mb-4'>
      <View className='flex-row items-center'>
        <Image className='w-[64] h-[64] rounded-xl' source={getImageSource()} />
        <View className='ml-4'>
          <Text className='font-isemibold mb-[10] text-soil text-base'>
            {role === 'ROLE_GUIDE' ? customerName : guideName}
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
            {formattedDate(startDate)} s/d {formattedDate(endDate)}
          </Text>
          <Text className='font-ibold text-soil text-base'>{price}</Text>
        </View>
        <CustomButton
          title={
            status === "UPCOMING"
              ? "Lihat Detail"
              : status === "WAITING_PAY"  && role === 'ROLE_CUSTOMER'
              ? "Bayar"
              : status === "WAITING_PAY" && role === 'ROLE_GUIDE'
              ? "Lihat Detail"
              : status === "REJECTED" || status === "DONE"
              ? "Lihat Detail"
              : status === "WAITING_APPROVE" && role === 'ROLE_CUSTOMER'
              ? "Lihat Detail"
              : "Beri Persetujuan"
          }
          customStyle='bg-evergreen justify-center px-6'
          buttonHandling={onPressDetail}
        />
      </View>
      {customElements}
    </View>
  );
};

export default TourGuideCard;
