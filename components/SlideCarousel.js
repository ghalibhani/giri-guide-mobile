import { useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

const SlideCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  });

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };
  
  const renderItem = ({ item }) => {
    return (
      <View 
        className="w-full h-[214px] rounded-3xl overflow-hidden" 
        style={{ width: width - 40}}
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          className="w-full h-[214px] rounded-3xl"
        />
      </View>
    );
  };

  return (
    <>
    <View className="mx-6 mt-5  pb-5 overflow-hidden rounded-b-3xl rounded-3xl">
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width - 40}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
    <View>
    <View className="flex-row justify-center mb-6">
        {data.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? "bg-daisy" : "bg-thistle"}`}
          />
        ))}
      </View>
    </View>

    </>
  );
};

export default SlideCarousel;
