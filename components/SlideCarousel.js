import { FlatList, View } from "react-native";

import { Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const SlideCarousel = ({ data }) => {
  const renderItem = ({ item }) => {
    if (!item || !item.image) {
      console.error("Item or image source missing");
      return null;
    }

    return (
      <View
        style={{
          width: width * 0.8,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          className="w-full h-[214px] rounded-xl"
          style={{ width, height: 214 }}
        />
      </View>
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
        snapToInterval={width * 0.8}
        className="rounded-xl"
      />
    </View>
  );
};

export default SlideCarousel;
