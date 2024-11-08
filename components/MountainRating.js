import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";

const MountainRating = ({
  star = 0,
  totalRating = 0,
  isBookmark = false,
  pointOfInterest = "",
  price = 0,
  theBestDuration = 0,
  handlePressOnHikingPoint,
  city = "",
}) => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const handleSelectPoint = (id, name) => {
    setSelectedPoint(id);
    handlePressOnHikingPoint(id, name);
  };

  return (
    <View className='flex flex-wrap justify-between px-6 py-5 bg-white rounded-[30px] mb-5 gap-4'>
      {/* <View className="flex flex-row justify-between w-full">
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
      </View> */}

      {pointOfInterest.length !== 0 && (
        <View className='flex flex-row gap-4 w-full'>
          <Entypo name='location-pin' size={20} color='#ECD768' />
          <View className='flex gap-4'>
            <Text className='text-md text-soil font-isemibold'>
              Titik pendakian
            </Text>
            <View
              className='flex flex-row gap-2 w-full pr-6'
              style={{ flexWrap: "wrap" }}
            >
              {pointOfInterest.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  className='p-3 border rounded-xl'
                  style={{
                    backgroundColor:
                      selectedPoint === item.id ? "#503a3a" : "transparent",
                    borderColor:
                      selectedPoint === item.id ? "#503a3a" : "#503a3a",
                  }}
                  onPress={() => handleSelectPoint(item.id, item.name)}
                >
                  <Text
                    className='text-xs font-isemibold text-soil'
                    style={{
                      color: selectedPoint === item.id ? "white" : "#503a3a",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}

      <View className='flex flex-row items-center gap-4'>
        <FontAwesome name='money' size={20} color='#91b89e' />
        <Text className='text-sm font-isemibold text-soil'>
          Harga mulai dari Rp {price.toLocaleString("id-ID")}
        </Text>
      </View>
      {/* <View className="flex flex-row items-center gap-4">
        <MaterialIcons name="access-time-filled" size={24} color="#b89191" />
        <Text className="text-sm font-isemibold text-soil">
          Durasi berkunjung terbaik {theBestDuration}
        </Text>
      </View> */}
      <View className='flex flex-row items-center gap-4'>
        <FontAwesome6 name='mountain-sun' size={20} color='#B8B591' />
        <Text className='text-sm font-isemibold text-soil'>
          Berlokasi di {city}
        </Text>
      </View>
    </View>
  );
};

export default MountainRating;
