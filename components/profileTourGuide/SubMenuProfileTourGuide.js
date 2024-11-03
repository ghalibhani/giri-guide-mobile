import { View } from "react-native";
import ButtonProfile from "../ButtonProfile";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";

const SubMenuProfileTourGuide = () => {
  return (
    <View className="px-6 bg-white rounded-t-verylarge py-6">
      <ButtonProfile
        text={"Informasi Personal"}
        onPress={() => router.navigate("/profile/profileInfo")}>
        <Octicons name="person" size={18} color={"#FBF6D9"} />
      </ButtonProfile>

      <ButtonProfile
        text={"Update Profile"}
        onPress={() => router.navigate("/profile/updateProfile")}>
        <Octicons name="pencil" size={18} color={"#FBF6D9"} />
      </ButtonProfile>

      <ButtonProfile
        text={"Ubah Password"}
        onPress={() => router.navigate("/profile/changePassword")}>
        <Ionicons name="key-outline" size={18} color={"#FBF6D9"} />
      </ButtonProfile>

      <ButtonProfile
        text={"Tentang Aplikasi"}
        onPress={() => router.navigate("/profile/about")}>
        <AntDesign name="exclamationcircleo" size={18} color={"#FBF6D9"} />
      </ButtonProfile>
    </View>
  );
};

export default SubMenuProfileTourGuide;
