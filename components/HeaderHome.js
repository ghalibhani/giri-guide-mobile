import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderHome = () => {
  return (
    <View className="w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil pt-5 pb-[24px] px-[24px]">
      <Text className="text-[20px] font-ibold text-ivory mb-5">
        Hai, FULL NAME!
      </Text>
      <View className="relative">
        <TouchableOpacity
          className="text-[14px] text-ivory bg-white h-11 rounded-3xl py-3 px-4 pl-12 justify-center"
          onPress={() => {
            router.navigate("/search/search");
          }}>
          <Ionicons
            name="search-outline"
            size={24}
            color="#000"
            className="absolute top-2 left-3 z-50"
          />
          <Text className="text-evergreen font-iregular">
            Cari tour guide di sini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
