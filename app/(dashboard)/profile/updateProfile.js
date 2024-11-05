import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import CustomInputOrPickerWithIcon from "../../../components/miniComponent/CustomInputOrPickerWithIcon";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateProfile } from "../../../redux/profileSlice";

const UpdateProfileScreen = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const userId = useSelector((state) => state.auth.userId);

  const [fullName, setFullName] = useState(profile.fullName);
  const [address, setAddress] = useState(profile.address);
  const [gender, setGender] = useState(profile.gender);
  const [email] = useState(profile.email);
  const [nik] = useState(profile.nik);

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [dispatch, userId]);

  const updateProfileHandler = () => {
    const profileData = {
      fullName,
      address,
      gender,
    };
    dispatch(updateProfile({ id: profile.id, profileData }));
    Alert.alert("Success", "Profile has been updated");
  };

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const tanggalLahir = () => {
    const birthDate = new Date(profile?.birthDate);
    return formattedDate(birthDate);
  };

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Update Profil"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='gap-4'>
          <CustomInputOrPickerWithIcon
            title={"NIK"}
            value={nik}
            isEditable={false}
            nameIcon={"card-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Tanggal Lahir"}
            value={tanggalLahir()}
            isEditable={false}
            nameIcon={"calendar-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Email"}
            value={email}
            isEditable={false}
            nameIcon={"mail-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Nama Lengkap"}
            value={fullName}
            setValue={setFullName}
            isEditable={true}
            nameIcon={"person-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Jenis Kelamin"}
            value={gender}
            setValue={setGender}
            isEditable={true}
            nameIcon={"male-female-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Alamat"}
            value={address}
            setValue={setAddress}
            isEditable={true}
            nameIcon={"home-outline"}
          />

          <CustomInputOrPickerWithIcon title={"Foto Profil"} val />

          <CustomButton
            buttonHandling={updateProfileHandler}
            customStyle={"bg-evergreen"}
            title={"Update"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfileScreen;
