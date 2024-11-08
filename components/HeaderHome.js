import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const HeaderHome = ({fullName}) => {
  return (
    <View className="w-screen gap-5 rounded-b-verylarge bg-soil pt-5 pb-6 px-6">
      <Text className="text-[20px] font-ibold text-ivory">
        Hai, {fullName}!
      </Text>
      <TouchableOpacity onPress={() => {
            router.navigate("/search/search");
          }} className="">
        <View className="px-4 py-3 bg-white flex-row gap-4 items-center rounded-verylarge">
            <Ionicons name='search' color={"#45594E"} size={20} />
            <Text className="text-thistle font-iregular text-base w-full flex-shrink">Cari tour guide di sini</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
