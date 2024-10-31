import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderBackProfile() {
	return(
		<View className="flex-row w-full mt-3 mb-5 pl-5 bg-ivory p-4 rounded-[12] items-center gap-7">
			<TouchableOpacity className="w-[30]  h-[30] rounded-full bg-white border-[2px] border-soil justify-center items-center">
				<Ionicons name="chevron-back" size={15} color="#503A3A"/>
			</TouchableOpacity>
			<Text className="text-soil text-xl font-semibold">Informasi Personal</Text>
		</View>
	)
}