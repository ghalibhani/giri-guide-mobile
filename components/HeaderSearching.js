import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const HeaderSearching = () => {
  return (
    <View className="w-screen rounded-b-[30px] bg-soil px-[24px]">
      <View className="flex flex-col justify-center items-center mb-[5px] mt-2">
        <TouchableOpacity className="w-[30]  h-[30] rounded-full bg-white border-[1px] border-soil justify-center items-center absolute left-3">
          <Ionicons
            name="chevron-back"
            size={15}
            color="#503A3A"
            onPress={() => router.back()}
          />
        </TouchableOpacity>

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
