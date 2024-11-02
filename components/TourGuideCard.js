import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const TourGuideCard = ({ image, name, description, rating, totalRating }) => {
  return (
    <View className="bg-white shadow-md rounded-2xl p-4 flex flex-row items-center mb-4">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-lg" />
      <View className="flex-1 ml-4">
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="text-sm font-semibold">{name}</Text>
          <View className="flex flex-row items-center">
            <FontAwesome name="star" size={16} color={"#ecd768"} />
            <Text className="text-[12px] font-semibold ml-1 text-plum">
              {rating} / 5 ({totalRating})
            </Text>
          </View>
        </View>
        <Text className="text-xs text-evergreen">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </Text>
      </View>
    </View>
  );
};

export default TourGuideCard;
