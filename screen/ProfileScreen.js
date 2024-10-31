import { Text, View } from "react-native";
import ContainerProfile from "../components/ContainerProfile";
import ButtonProfile from "../components/ButtonProfile";
import { AntDesign, Foundation, Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
	return (
		<View className="flex-1 items-center bg-hex-#F8F8F8">
			<ContainerProfile />
			<View className="mt-4 mb-3 px-6 py-6 w-full flex-1 bg-white rounded-[30px] items-center">
				<ButtonProfile>
					<Ionicons name="person-outline" size={18} className='mr-4 mt-1' color={"#F8F8F8"}/>
					<Text className="text-ivory text-lg font-semibold">Informasi Profile</Text>
				</ButtonProfile>
				<ButtonProfile>
					<Ionicons name="key-outline" size={18} className='mr-4 mt-1' color={"#F8F8F8"}/>
					<Text className="text-ivory text-lg font-semibold">Ubah Password</Text>
				</ButtonProfile>
				<ButtonProfile>
					<Ionicons name="reorder-four-outline" size={18} className='mr-4 mt-1' color={"#F8F8F8"}/>
					<Text className="text-ivory text-lg font-semibold">Tata Cara Pemesanan</Text>
				</ButtonProfile>
				<ButtonProfile>
					<Ionicons name="heart-outline" size={18} className='mr-4 mt-1' color={"#F8F8F8"}/>
					<Text className="text-ivory text-lg font-semibold">Wishlist Gunung</Text>
				</ButtonProfile>
				<ButtonProfile>
					<AntDesign name="exclamationcircleo" size={18} className='mr-4 mt-1' color={"#F8F8F8"}/>
					<Text className="text-ivory text-lg font-semibold">Tentang Aplikasi</Text>
				</ButtonProfile>
			</View>
		</View>
	);
}
