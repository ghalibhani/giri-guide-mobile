import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderBackProfile({ text }) {
  return (
    <View className="flex-row w-full mt-3 mb-5 pl-5 bg-ivory p-4 rounded-[12] items-center gap-6">
      <TouchableOpacity className="w-[30]  h-[30] rounded-full bg-white border-[1px] border-soil justify-center items-center">
        <Ionicons
          name="chevron-back"
          size={15}
          color="#503A3A"
          onPress={() => router.back()}
        />
      </TouchableOpacity>
      <Text className="text-soil text-base font-isemibold">{text}</Text>
    </View>
  );
}
