import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput } from "react-native";
const HeaderHome = () => {
  const navigate = useNavigation();
  return (
    <View className="w-screen h-[176px] rounded-br-[30px] rounded-bl-[30px] bg-soil pt-[64px] pb-[24px] px-[24px]">
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
            navigate.navigate("Search");
          }}
        />
      </View>
    </View>
  );
};

export default HeaderHome;
