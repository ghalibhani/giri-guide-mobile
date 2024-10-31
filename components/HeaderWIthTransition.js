import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

import { useEffect } from "react";
import { Animated } from "react-native";

const HeaderHome = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const animatedHeight = useState(new Animated.Value(176))[0];

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isSearchFocused ? 459 : 176,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isSearchFocused]);

  return (
    <Animated.View
      style={{ height: animatedHeight }}
      className={`w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil pt-[64px] pb-[24px] px-[24px]`}>
      {isSearchFocused ? (
        <>
          <View className="flex flex-col justify-center items-center mb-[60px]">
            <Ionicons
              name="arrow-back"
              size={24}
              color={"#FBF6D9"}
              className="absolute top-2 left-3 z-50"
              onPress={() => setSearchFocused(false)}
            />
            <Text className="text-[20px] font-bold text-ivory">
              Pencarian tour guide
            </Text>
          </View>
          <Text className="text-[20px] font-bold text-ivory mb-5 text-center">
            Gambar gunung
          </Text>
          <View className="h-[260px] p-[15px] bg-white"></View>
        </>
      ) : (
        <>
          <Text className="text-[20px] font-bold text-ivory mb-5">
            Hai, FULL NAME!
          </Text>
          <View className="relative">
            <Ionicons
              name="search-outline"
              size={24}
              color="#000"
              className="absolute top-2 left-3 z-50"
            />
            <TextInput
              className="text-[16px] text-ivory bg-white h-11 rounded-3xl px-4 pr-3 pl-12"
              placeholder="Cari tour guide di sini"
              onFocus={() => {
                setSearchFocused(true);
              }}
            />
          </View>
        </>
      )}
    </Animated.View>
  );
};

export default HeaderHome;
