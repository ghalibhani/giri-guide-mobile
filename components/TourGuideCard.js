import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
const TourGuideCard = ({
  image,
  name,
  description,
  rating,
  totalRating,
  tourGuideId,
  hikingPointId,
  hikingPointName, 
  mountainName,
  mountainId,
}) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/detailGuide/detailGuide?tourGuideId=${tourGuideId}&hikingPointId=${hikingPointId}&mountainName=${mountainName}&hikingPointName=${hikingPointName}&mountainId=${mountainId}`)}
    >
      <View className='bg-white shadow-md rounded-2xl p-4 flex flex-row items-center mb-4'>
        <Image source={{ uri: image }} className='w-16 h-16 rounded-lg' />
        <View className='flex-1 ml-4'>
          <View className='flex flex-row items-center justify-between mb-3'>
            <Text className='text-sm font-semibold'>{name}</Text>
            <View className='flex flex-row items-center'>
              <FontAwesome name='star' size={16} color={"#ecd768"} />
              <Text className='text-[12px] font-isemibold ml-1 text-plum'>
                {rating.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })} ({totalRating})
              </Text>
            </View>
          </View>
          <Text className='text-sm font-iregular text-evergreen'>
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourGuideCard;
