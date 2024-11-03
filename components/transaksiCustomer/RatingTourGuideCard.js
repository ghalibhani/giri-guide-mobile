import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Star from "../Star";

const RatingTourGuideCard = ({ guideName, guideImage }) => {
  const getImageSource = () => {
    if (guideImage) {
      return { uri: guideImage };
    }
    return require("../../assets/profile-image.jpg");
  };

  return (
    <View className='bg-white p-6 rounded-verylarge mb-4'>
      <View className='flex-row items-center'>
        <Image className='w-[64] h-[64] rounded-xl' source={getImageSource()} />
        <View className='ml-4'>
          <Text className='font-iregular mb-[5] text-thistle text-sm'>
            Nama Tour Guide
          </Text>
          <Text className='font-isemibold mb-[10] text-soil text-base'>
            {guideName}
          </Text>
        </View>
        <View className='ml-auto flex-row items-center'>
          <AntDesign name='star' size={20} color='#ECD768' />
          <Text className='font-isemibold text-sm text-plum ml-2'>
            4,5 (12)
          </Text>
        </View>
      </View>
      <View className='my-5 h-[1] bg-borderCustom'></View>
      <View className='flex-row justify-center items-center gap-4'>
        <Star></Star>
      </View>
    </View>
  );
};

export default RatingTourGuideCard;
