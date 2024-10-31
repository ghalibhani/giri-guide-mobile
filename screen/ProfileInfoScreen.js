import { View } from "react-native";
import HeaderBackProfile from "../components/HeaderBackProfile";
import ProfileInfo from "../components/ProfileInfo";

export default function ProfileInfoScreen() {
	return (
		<View className="flex-1 px-6">
			<HeaderBackProfile />
			<View className="flex-col gap-3">
				<ProfileInfo label={"NIK"} value={"1234567890"} />
				<ProfileInfo label={"Nama Lengkap"} value={"John Doe"} />
				<ProfileInfo label={"Tanggal Lahir"} value={"14 Maret 2000"} />
				<ProfileInfo label={"Jenis Kelamin"} value={"Laki-laki"} />
				<ProfileInfo label={"Alamat"} value={"Jl. Jend. Sudirman No. 1"} />
				<ProfileInfo label={"Email"} value={"QpFQ5@example.com"} />
			</View>
		</View>
	);
}
