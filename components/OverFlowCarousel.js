import { Image, Text, View } from "react-native";

import { FlatList } from "react-native";
const OverFlowCarousel = ({ data, title }) => {
  const renderItemWrapper = ({ item }) => {
    return (
      <View className="mr-5">
        <Image
          source={{ uri: item.image }}
          className="w-[200px] h-[120px] rounded-xl"
        />
      </View>
    );
  };

  return (
    <View className="px-6 bg-[#fff]">
      <View className="my-[15px] flex justify-between flex-row">
        <Text className="text-[14px] font-bold">{title}</Text>
        <Text className="text-[14px]">Selengkapnya</Text>
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
