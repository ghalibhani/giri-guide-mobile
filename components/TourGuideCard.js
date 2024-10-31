import { View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const TourGuideCard = ({ image, name, description, rating, totalRating }) => {
  return (
    <View className="bg-white shadow-md rounded-2xl p-4 flex flex-row items-center mb-4">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-lg" />
      <View className="flex-1 ml-4">
        <View className="flex flex-row items-center justify-between mb-2">
          <Text className="text-lg font-bold">{name}</Text>
          <View className="flex flex-row items-center">
            <FontAwesome name="star" size={16} color="#FFD700" />
            <Text className="text-lg font-bold ml-1">
              {rating} / 5 ({totalRating})
            </Text>
          </View>
        </View>
        <Text className="text-sm text-gray-500">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </Text>
      </View>
    </View>
  );
};

export default TourGuideCard;
