import { TouchableOpacity, View } from "react-native";

export default function ButtonProfile({ children }) {
	return (
		<View className="w-full mb-5 justify-center">
			<TouchableOpacity className="flex-row h-14 rounded-full bg-soil items-start py-3 px-6 space-x-3">
				{children}
			</TouchableOpacity>
		</View>
	);
}
