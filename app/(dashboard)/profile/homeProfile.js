import { View } from "react-native";
import ContainerProfile from "../../../components/ContainerProfile";
import ButtonProfile from "../../../components/ButtonProfile";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProfileCustomer,
} from "../../../redux/profileSlice";

export default function HomeProfileScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const profile = useSelector((state) => state.profile);

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    dispatch(fetchProfileCustomer(userId));
  }, [dispatch, userId]);

  return (
    <View className='flex-1 items-center bg-hex-#F8F8F8'>
      <ContainerProfile
        email={profile?.email}
        fullName={profile?.fullName}
        birthDate={
          profile?.createdAt
            ? formattedDate(new Date(profile.createdAt))
            : "Tanggal tidak tersedia"
        }
      />
      <View className='mt-4 mb-3 px-6 py-6 w-full flex-1 bg-white rounded-[30px] items-center'>
        <ButtonProfile
          text={"Informasi Personal"}
          onPress={() => {
            router.push("/profile/profileInfo");
          }}
        >
          <Octicons name='person' size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Update Profile"}
          onPress={() => {
            router.push("/profile/updateProfile");
          }}
        >
          <Octicons name='pencil' size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Ubah Password"}
          onPress={() => {
            router.push("/profile/changePassword");
          }}
        >
          <Ionicons name='key-outline' size={18} color={"#FBF6D9"} />
        </ButtonProfile>
        <ButtonProfile
          text={"Tata Cara Pemesanan"}
          onPress={() => {
            router.push("/profile/stepOrder");
          }}
        >
          <Ionicons name='reorder-four-outline' size={18} color={"#FBF6D9"} />
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
          }}
        >
          <AntDesign name='exclamationcircleo' size={18} color={"#FBF6D9"} />
        </ButtonProfile>
      </View>
    </View>
  );
}
