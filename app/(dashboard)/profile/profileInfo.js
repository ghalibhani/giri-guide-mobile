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
import {
  clearProfile,
  fetchProfileCustomer,
} from "../../../redux/profileSlice";
import { fetchTourGuideProfileByUserId } from "../../../redux/tourGuideSlice";

export default function ProfileInfoScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const profileCustomer = useSelector((state) => state.profile);
  const role = useSelector((state) => state.auth.role);
  const profileTourGuide = useSelector((state) => state.tourGuide.tourGuide);

  useEffect(() => {
    if (role === "ROLE_CUSTOMER") {
      dispatch(fetchProfileCustomer(userId));
    } else {  
      dispatch(fetchTourGuideProfileByUserId(userId));
    }
  }, [dispatch, userId]);

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const tanggalLahir = () => {
    const birthDate = role === "ROLE_CUSTOMER" ? profileCustomer?.birthDate : profileTourGuide?.birthDate;

    if (birthDate) {
      return formattedDate(new Date(birthDate));
    } else {
      return "Tanggal lahir tidak tersedia"; // Fallback value
    }
  };

  const jenisKelamin = () => {
    if (role === "ROLE_CUSTOMER") {
      if (profileCustomer?.gender === "MALE") {
        return "Pria";
      } else {
        return "Wanita";
      }
    } else {
      if (profileTourGuide?.gender === "MALE") {
        return "Pria";
      } else {
        return "Wanita";
      }
    }
  };

  const handleLogout = async () => {
    try {
      dispatch(logout());
      dispatch(clearProfile());
      router.replace("/login");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Informasi Personal"} />
      <View className='flex-col gap-4'>
        <ProfileInfo
          label={"NIK"}
          value={
            role === "ROLE_CUSTOMER"
              ? profileCustomer?.nik
              : profileTourGuide?.nik
          }
          nameIcon={"card-outline"}
        />
        <ProfileInfo
          label={"Nama Lengkap"}
          value={
            role === "ROLE_CUSTOMER"
              ? profileCustomer?.fullName
              : profileTourGuide?.name
          }
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
          // value={profileCustomer?.address}
          value={
            role === "ROLE_CUSTOMER"
              ? profileCustomer?.address
              : profileTourGuide?.address
          }
          nameIcon={"home-outline"}
        />
        <ProfileInfo
          label={"Email"}
          value={
            role === "ROLE_CUSTOMER"
              ? profileCustomer?.email
              : profileTourGuide?.email
          }
          nameIcon={"mail-outline"}
        />
        <ButtonLogout onPress={handleLogout} children={"Logout"} />
      </View>
    </SafeAreaView>
  );
}
