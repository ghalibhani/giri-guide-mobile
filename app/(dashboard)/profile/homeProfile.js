import { View } from "react-native";
import ContainerProfile from "../../../components/ContainerProfile";
import ButtonProfile from "../../../components/ButtonProfile";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeProfileScreen() {
  return (
    <View className="flex-1 items-center bg-hex-#F8F8F8">
      <ContainerProfile />
      <View className="mt-4 mb-3 px-6 py-6 w-full flex-1 bg-white rounded-[30px] items-center">
        <ButtonProfile
          text={"Informasi Personal"}
          onPress={() => {
            router.push("/profile/profileInfo");
          }}>
          <Octicons name="person" size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Update Profile"}
          onPress={() => {
            router.push("/profile/updateProfile");
          }}>
          <Octicons name="pencil" size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Ubah Password"}
          onPress={() => {
            router.push("/profile/changePassword");
          }}>
          <Ionicons name="key-outline" size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Tata Cara Pemesanan"}
          onPress={() => {
            router.push("/profile/stepOrder");
          }}>
          <Ionicons name="reorder-four-outline" size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        {/* <ButtonProfile
          text={"Bookmark Gunung"}
          onPress={() => {
            router.push("/profile/bookmark");
          }}>
          <Ionicons name="heart-outline" size={18} color={"#FBF6D9"} />
        </ButtonProfile> */}
        <ButtonProfile
          text={"Tentang Aplikasi"}
          onPress={() => {
            router.push("/profile/about");
          }}>
          <AntDesign name="exclamationcircleo" size={18} color={"#FBF6D9"} />
        </ButtonProfile>
      </View>
    </View>
  );
}
