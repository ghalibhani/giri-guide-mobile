import { Entypo } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CustomInput from "./miniComponent/CustomInput";

export default function PasswordChange({ label, placeholder, isEditable, catatan, setCatatan }) {
	return (
		<View className="flex-col p-[15] bg-white gap-2 rounded-[12]">
			<Text className="font-ibold text-sm text-evergreen">{label}</Text>
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

			<View className="border-borderCustom border-[1px] bg-white rounded-xl px-6 py-5 gap-[5]">
                <TextInput 
                    editable={isEditable}
                    placeholder='Catatan maksimal 150 karakter' 
                    placeholderTextColor={'#D6D6D6'}
                    value={catatan}
                    onChangeText={setCatatan}
                    multiline={true}
                    numberOfLines={4}
                    className="font-imedium text-base align-top color-evergreen"
                />
            </View>

			<CustomInput 
				title={"Password Lama"}
				placeholder={"Masukkan password lama"}
				secureTextEntry={true}
			/>
		</View>
	);
}
