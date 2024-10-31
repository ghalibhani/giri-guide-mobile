import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

const HeaderSearching = () => {
  const navigate = useNavigation();
  return (
    <View className="w-screen h-[114px] rounded-br-[30px] rounded-bl-[30px] bg-soil pt-[57px] px-[24px]">
      <View className="flex flex-col justify-center items-center mb-[5px]">
        <Ionicons
          name="arrow-back"
          size={24}
          color={"#FBF6D9"}
          className="absolute top-2 left-3 z-50"
          onPress={() => navigate.navigate("Search")}
        />
        <Text className="text-[20px] font-bold text-ivory">
          Pencarian tour guide
        </Text>
      </View>

      <Text className="text-[12px] font-normal text-ivory mb-5 text-center">
        Titik pendakian
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HeaderSearching;
