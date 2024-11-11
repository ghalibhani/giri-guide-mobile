import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { updateProfileImage } from "../redux/profileSlice";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import CustomModalSuccess from "./miniComponent/CustomModalSuccess";

const imageUrl =
  "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380";

export default function ContainerProfile({ email, fullName, birthDate }) {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Izin diperlukan untuk mengakses galeri.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;

      const formData = new FormData();
      formData.append("image", {
        uri: selectedImageUri,
        name: "profile.jpg",
        type: "image/jpeg",
      });

      dispatch(updateProfileImage({ id: userId, image: formData }))
        .unwrap()
        .then(() => {
          setIsModalVisible(true);
        })
        .catch((err) => {
          Alert.alert(
            "Gagal",
            err.message || "Terjadi kesalahan saat memperbarui gambar."
          );
        });
    }
  };

  const getImageSource = (imageUser) => {
    if (!imageUser) {
      return require("./../assets/profile-image.jpg");
    }

    if (
      typeof imageUser === "string" &&
      (imageUser.startsWith("http") || imageUser.startsWith("https"))
    ) {
      return { uri: imageUser };
    }

    return require("./../assets/profile-image.jpg");
  };

  return (
    <View className='bg-white h-[367] w-full items-center rounded-b-[30]'>
      <Image
        source={{ uri: imageUrl }}
        className='h-[200] w-full rounded-b-[30]'
        resizeMode='cover'
      />

      <Image
        source={getImageSource(profile.imageId)}
        className='w-[150] h-[150] rounded-full mt-[-75]'
      />
      <TouchableOpacity
        onPress={pickImage}
        className='w-[40] h-[40] rounded-full bg-daisy items-center justify-center border-[2px] border-white mt-[-40] mr-[-90]'
      >
        <Feather name='edit-2' size={18} color='black' />
      </TouchableOpacity>
      <Text className='mt-[10px] text-thistle text-[12px] font-light'>
        {email}
      </Text>
      <Text className='mt-[8px] text-evergreen text-[14px] font-bold'>
        {fullName}
      </Text>
      <Text className='mt-[8px] text-thistle text-[12px] font-light'>
        {birthDate}
      </Text>
      <CustomModalSuccess
        isModalVisible={isModalVisible}
        handleDone={() => setIsModalVisible(false)}
      >
        <Text className='text-center font-iregular text-evergreen mb-2'>
          Gambar profil berhasil diperbarui
        </Text>
      </CustomModalSuccess>
    </View>
  );
}
