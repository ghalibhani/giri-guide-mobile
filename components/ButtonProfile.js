import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonProfile({ text, onPress, children }) {
  return (
    <View className="w-full mb-4 justify-center">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row py-4 rounded-full bg-soil items-center px-6 gap-4"
      >
        {children}
        <Text className="text-ivory text-sm font-isemibold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
