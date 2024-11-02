import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import Star from "./Star";

const MountainRating = ({
  star = 0,
  totalRating = 0,
  isBookmark = false,
  pointOfInterest = "",
  price = 0,
  theBestDuration = 0,
}) => {
  return (
    <View className="flex flex-wrap justify-between px-6 py-5 bg-white rounded-[30px] mb-5 gap-4">
      <View className="flex flex-row justify-between w-full">
        <View className="flex flex-row items-center mr-4">
          <Star star={star} />
          <Text className="text-sm font-semibold ml-2 text-plum">
            {star} ({totalRating})
          </Text>
        </View>
        {isBookmark ? (
          <FontAwesome name="bookmark" size={20} color="#ECD768" />
        ) : (
          <FontAwesome name="bookmark-o" size={20} color="#d4d6dd" />
        )}
      </View>
      <View className="flex flex-row gap-4 w-full">
        <Entypo name="location-pin" size={20} color="#ECD768" />
        <View className="flex gap-4">
          <Text className="text-sm text-soil font-semibold">
            Titik pendakian
          </Text>
          <View
            className="flex flex-row gap-2 w-full"
            style={{ flexWrap: "wrap" }}>
            {pointOfInterest.split(",").map((item, index) => (
              <TouchableOpacity
                className="p-3 border rounded-xl"
                key={index}
                onPress={() => {
                  router.navigate(`/home/poinOfInterest`);
                }}>
                <Text className="text-xs font-semibold text-soil">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View className="flex flex-row gap-4">
        <FontAwesome name="money" size={20} color="#91b89e" />
        <Text className="text-sm font-semibold text-soil">
          Harga mulai dari Rp {price.toLocaleString("id-ID")}
        </Text>
      </View>
      <View className="flex flex-row gap-4">
        <MaterialIcons name="access-time-filled" size={24} color="#b89191" />
        <Text className="text-sm font-semibold text-soil">
          Durasi berkunjung terbaik {theBestDuration}
        </Text>
      </View>
    </View>
  );
};

export default MountainRating;
