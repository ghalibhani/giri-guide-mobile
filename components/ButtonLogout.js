import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonLogout({ onPress }) {
  return (
    <View className="w-full mt-3 justify-center">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row py-[16.5] rounded-xl bg-[#ED3241] items-center justify-center"
      >
        <Text className="text-white text-sm font-isemibold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
