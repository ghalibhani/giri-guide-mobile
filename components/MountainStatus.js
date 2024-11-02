import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
const MountainStatus = ({ status, iconName }) => {
  return (
    <View className="flex flex-row mb-5 rounded-2xl p-4 gap-4 bg-[#e7f4e8]">
      <AntDesign
        name={iconName ? iconName : "checkcircle"}
        size={24}
        color="#3bbfa1"
      />
      <Text>{status}</Text>
    </View>
  );
};

export default MountainStatus;
