import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import CustomInputOrPickerWithIcon from "../../../components/miniComponent/CustomInputOrPickerWithIcon";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileCustomer,
  updateProfile,
} from "../../../redux/profileSlice";

const UpdateProfileScreen = () => {
  const dispatch = useDispatch();
  const profileCustomer = useSelector((state) => state.profile);
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.userId);
  const [fullName, setFullName] = useState(profileCustomer.fullName);
  const [address, setAddress] = useState(profileCustomer.address);
  const [gender, setGender] = useState(profileCustomer.gender);

  useEffect(() => {
    if (role === "ROLE_CUSTOMER") {
      dispatch(fetchProfileCustomer(userId));
    }
  }, [dispatch, userId]);

  const updateProfileHandler = () => {
    const profileData = {
      fullName,
      address,
      gender,
    };

    dispatch(
      updateProfile({
        id: profileCustomer.id,
        profileData,
      })
    );

    Alert.alert("Success", "Profile has been updated");
  };

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Update Profil"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='gap-4 mb-7'>
          <CustomInputOrPickerWithIcon
            title={"NIK"}
            value={profileCustomer?.nik}
            isEditable={false}
            nameIcon={"card-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Tanggal Lahir"}
            value={
              profileCustomer?.birthDate
                ? formattedDate(new Date(profileCustomer.birthDate))
                : "-"
            }
            isEditable={false}
            nameIcon={"calendar-outline"}
          />

          <CustomInputOrPickerWithIcon
            title={"Email"}
            value={profileCustomer?.email}
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
