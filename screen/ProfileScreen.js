import { Text, View } from "react-native";
import ContainerProfile from "../components/ContainerProfile";
import ButtonProfile from "../components/ButtonProfile";
import { AntDesign, Foundation, Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
	return (
		<View className="flex-1 items-center bg-hex-#F8F8F8">
			<ContainerProfile />
			<View className="mt-4 mb-3 px-6 py-6 w-full flex-1 bg-white rounded-[30px] items-center">
				<ButtonProfile text={"Informasi Profile"}>
					<Ionicons name="person-outline" size={18} color={"#F8F8F8"}/>
				</ButtonProfile>
				<ButtonProfile text={"Ubah Password"}>
					<Ionicons name="key-outline" size={18} color={"#F8F8F8"}/>
				</ButtonProfile>
				<ButtonProfile text={"Tata Cara Pemesanan"}>
					<Ionicons name="reorder-four-outline" size={18} color={"#F8F8F8"}/>
				</ButtonProfile>
				<ButtonProfile text={"Wishlist Gunung"}>
					<Ionicons name="heart-outline" size={18} color={"#F8F8F8"}/>
				</ButtonProfile>
				<ButtonProfile text={"Tentang Aplikasi"}>
					<AntDesign name="exclamationcircleo" size={18} color={"#F8F8F8"}/>
				</ButtonProfile>
			</View>
		</View>
	);
}
