import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { FlatList } from "react-native";
const OverFlowCarousel = ({
  data,
  title,
  withDescription = false,
  customStyle,
  route,
  additionalImage,
  continueToAllLists ='/home'
}) => {
  // console.log('ini title ', title, ' dengan data', data)
  const limitedData = data.slice(0, 5);
  const [usedIndices, setUsedIndices] = useState([]);
  const [randomImages, setRandomImages] = useState({});

  useEffect(() => {
    const randomImagesMap = {}
    if(additionalImage && additionalImage.length > 0){
      const availableIndices = additionalImage
        .map((_, index) => index)
        .filter(index => !usedIndices.includes(index));

      if (availableIndices.length > 0) {
        availableIndices.forEach(index => {
          randomImagesMap[index] = additionalImage[index].image;
        });
        setRandomImages(randomImagesMap);
      }
    }
  }, [additionalImage, usedIndices])

  const getRandomImage = (index) => {
    return randomImages[index] || null
    
  }

  const renderItemWrapper = ({ item, index }) => {
    const isLastItem = index === limitedData.length - 1;
    const randomImage = getRandomImage(index)

    return (
      <TouchableOpacity onPress={() => router.push(
        randomImage 
        ? `/home/routeDetail?id=${item.id}&imageUrl=${randomImage}`
        : `/home/mountainDetail?id=${item.id}`
      )}>
        <View className={`ml-5 ${isLastItem ? "mr-5" : "mr-0"} ${withDescription ? "rounded-xl bg-white" : ""}`}>
          <View className="relative w-[200px] h-[120px]">

            <Image
              source={{ uri: randomImage ? randomImage : item.image }}
              className={`w-full h-full ${withDescription ? "rounded-t-xl" : "rounded-xl"}`}
            />
            
            {item.image &&
              <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl" />
            }

            <Text className="absolute bottom-2 left-4 text-white font-ibold text-base flex-shrink">
              {item.name}
            </Text>
          </View>

          {withDescription && (
            <View className="w-[200px] h-[80px]">
              <Text className="text-[14px] font-ibold p-4 flex-shrink">{item.title}</Text>
            </View>
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
        data={limitedData}
        renderItem={renderItemWrapper}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OverFlowCarousel;
