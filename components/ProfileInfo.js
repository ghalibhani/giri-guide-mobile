import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function ProfileInfo({ label, value, nameIcon }) {
	return (
		<View className="bg-white rounded-[12] w-full items-center px-6 py-5 flex-row gap-5">
			<Ionicons name={nameIcon} size={20} color="#ECD768" className="justify-center" />
			<View className='gap-[5]'> 
				<Text className="font-iregular text-sm text-thistle">{label}</Text>
				<Text className="font-imedium text-base color-evergreen pr-6">{value}</Text>
			</View>
		</View>
	);
}
