import { Button, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import ProfileInfo from "../../../components/ProfileInfo";
import ButtonLogout from "../../../components/ButtonLogout";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/authSlice";

export default function ProfileInfoScreen() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      dispatch(logout());
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace("/login");
  //   }
  // }, [isLoggedIn]);

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Informasi Personal"} />
      <View className='flex-col gap-4'>
        <ProfileInfo
          label={"NIK"}
          value={"1234567890"}
          nameIcon={"card-outline"}
        />
        <ProfileInfo
          label={"Nama Lengkap"}
          value={"John Doe"}
          nameIcon={"person-outline"}
        />
        <ProfileInfo
          label={"Tanggal Lahir"}
          value={"14 Maret 2000"}
          nameIcon={"calendar-outline"}
        />
        <ProfileInfo
          label={"Jenis Kelamin"}
          value={"Laki-laki"}
          nameIcon={"male-female-outline"}
        />
        <ProfileInfo
          label={"Alamat"}
          value={"Jl. Jend. Sudirman No. 1"}
          nameIcon={"home-outline"}
        />
        <ProfileInfo
          label={"Email"}
          value={"QpFQ5@example.com"}
          nameIcon={"mail-outline"}
        />
        <ButtonLogout onPress={handleLogout} children={"Logout"} />
      </View>
    </SafeAreaView>
  );
}
