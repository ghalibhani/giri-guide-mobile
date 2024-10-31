import { Button, View } from "react-native";
import HeaderBackProfile from "../components/HeaderBackProfile";
import ProfileInfo from "../components/ProfileInfo";
import ButtonLogout from "../components/ButtonLogout";

export default function ProfileInfoScreen() {
	return (
		<View className="flex-1 px-6">
			<HeaderBackProfile />
			<View className="flex-col gap-3">
				<ProfileInfo label={"NIK"} value={"1234567890"} nameIcon={"card-outline"} />
				<ProfileInfo label={"Nama Lengkap"} value={"John Doe"} nameIcon={"person-outline"}/>
				<ProfileInfo label={"Tanggal Lahir"} value={"14 Maret 2000"} nameIcon={"calendar-outline"} />
				<ProfileInfo label={"Jenis Kelamin"} value={"Laki-laki"} nameIcon={"male-female-outline"} />
				<ProfileInfo label={"Alamat"} value={"Jl. Jend. Sudirman No. 1"} nameIcon={"home-outline"} />
				<ProfileInfo label={"Email"} value={"QpFQ5@example.com"} nameIcon={"mail-outline"} />
				<ButtonLogout children={"Logout"} />
			</View>
		</View>
	);
}
