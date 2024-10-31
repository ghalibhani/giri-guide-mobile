import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function ProfileInfo({ label, value, nameIcon }) {
	return (
		<View className="bg-white rounded-[12] w-full h-24 items-center px-5 py-3 flex-row gap-5">
			<Ionicons name={nameIcon} size={20} color="#ECD768" className="justify-center" />
			<View className='flex-col'> 
				<Text className="text-thistle text-md font-light mb-2">{label}</Text>
				<Text className="text-evergreen text-lg font-bold">{value}</Text>
			</View>
		</View>
	);
}
