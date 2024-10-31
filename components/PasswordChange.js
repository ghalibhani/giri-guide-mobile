import { Entypo } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PasswordChange({ label, placeholder }) {
	return (
		<View className="flex-col p-[15] bg-white gap-2 rounded-[12]">
			<Text className="font-semibold text-evergreen">{label}</Text>
			<TextInput
				className="py-[14] px-[16] font-normal text-[#8F9098]  border border-[#C5C6CC] rounded-[14] "
				placeholder={placeholder}
			/>
			<TouchableOpacity className="absolute right-[30] top-[56]">
				<Entypo
					name="eye"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	);
}
