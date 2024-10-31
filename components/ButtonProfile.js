import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonProfile({ text, children }) {
	return (
		<View className="w-full mb-4 justify-center">
			<TouchableOpacity className="flex-row py-[14] rounded-full bg-soil items-center px-6 gap-3">
				{children}
				<Text className="text-ivory text-lg font-semibold">{text}</Text>
			</TouchableOpacity>
		</View>
	);
}
