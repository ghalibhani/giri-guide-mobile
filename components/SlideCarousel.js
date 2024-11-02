import { FlatList, View } from "react-native";
import { Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

const SlideCarousel = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        className="w-full h-[214px] rounded-xl"
        style={{ width: width - 40, height: 214, borderRadius: 12 }}
      />
    );
  };

  return (
    <View className="flex-row mx-6 mt-5 mb-6 rounded-xl">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width - 40}
        className="rounded-xl"
      />
    </View>
  );
};

export default SlideCarousel;
