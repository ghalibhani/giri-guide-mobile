import { Link, router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { FlatList } from "react-native";
const OverFlowCarousel = ({
  data,
  title,
  withDescription = false,
  customStyle,
  route,
  continueToAllLists ='/home'
}) => {
  const renderItemWrapper = ({ item, index }) => {
    const isLastItem = index === data.length - 1;

    return (
      <TouchableOpacity onPress={() => router.push(`/home/mountainDetail?id=${item.id}`)}>
        <View className={`ml-5 ${isLastItem ? "mr-5" : "mr-0"} ${withDescription ? "rounded-xl bg-white" : ""}`}>
          <View className="relative w-[200px] h-[120px]">
            <Image
              source={{ uri: item.image }}
              className={`w-full h-full ${withDescription ? "rounded-t-xl" : "rounded-xl"}`}
            />
            
            <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl" />

            <Text className="absolute bottom-2 left-4 text-white font-ibold text-base flex-shrink">
              {item.name}
            </Text>
          </View>

          {withDescription && (
            <Text className="text-[14px] font-ibold p-4">{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className={` mb-6 ${customStyle ? customStyle : ""}`}>
      <View className="mb-4 flex justify-between flex-row">
        <Text className="text-[14px] px-6 font-ibold text-base text-soil">{title}</Text>
        <TouchableOpacity className="pr-6">
          <Link href={continueToAllLists} className="text-[14px] font-iregular text-sm text-evergreen">Selengkapnya</Link>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItemWrapper}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OverFlowCarousel;
