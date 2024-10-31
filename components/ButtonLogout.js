import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonLogout() {
	return (
		<View className="w-full mt-3 justify-center">
			<TouchableOpacity className="flex-row py-[16.5] rounded-[12] bg-[#ED3241] items-center justify-center">
				<Text className="text-ivory text-lg font-semibold">Logout</Text>
			</TouchableOpacity>
		</View>
	);
}