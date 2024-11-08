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
import { clearProfile, fetchProfileCustomer } from "../../../redux/profileSlice";

export default function ProfileInfoScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfileCustomer(userId));
  }, [dispatch, userId]);

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const tanggalLahir = () => {
    // const birthDate = new Date(profile?.birthDate);
    // return formattedDate(birthDate);

    if (profile?.birthDate) {
      const birthDate = new Date(profile.birthDate);
      if (!isNaN(birthDate)) {
        return formattedDate(birthDate);
      }
    }
    return "Tanggal tidak tersedia";
  };

  const jenisKelamin = () => {
    if (profile?.gender === "MALE") {
      return "Pria";
    } else {
      return "Wanita";
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(logout());
      dispatch(clearProfile());
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Informasi Personal"} />
      <View className='flex-col gap-4'>
        <ProfileInfo
          label={"NIK"}
          value={profile?.nik}
          nameIcon={"card-outline"}
        />
        <ProfileInfo
          label={"Nama Lengkap"}
          value={profile?.fullName}
          nameIcon={"person-outline"}
        />
        <ProfileInfo
          label={"Tanggal Lahir"}
          value={tanggalLahir()}
          nameIcon={"calendar-outline"}
        />
        <ProfileInfo
          label={"Jenis Kelamin"}
          value={jenisKelamin()}
          nameIcon={"male-female-outline"}
        />
        <ProfileInfo
          label={"Alamat"}
          value={profile?.address}
          nameIcon={"home-outline"}
        />
        <ProfileInfo
          label={"Email"}
          value={profile?.email}
          nameIcon={"mail-outline"}
        />
        <ButtonLogout onPress={handleLogout} children={"Logout"} />
      </View>
    </SafeAreaView>
  );
}
