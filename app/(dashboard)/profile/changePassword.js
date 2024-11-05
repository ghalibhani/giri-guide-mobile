import { Alert, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import PasswordChange from "../../../components/PasswordChange";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../../components/miniComponent/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changePassword } from "../../../redux/authSlice";

export default function ChangePasswordScreen() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePasswordHandler = async () => {
    try {
      const passwordData = {
        userId,
        oldPassword,
        newPassword,
      };
      await dispatch(changePassword(passwordData)).unwrap();
      Alert.alert("Success", "Password berhasil diubah");
    } catch (error) {
      const errorMessage =
        error.message || error.response?.data || "Terjadi kesalahan";

      const cleanMessage = errorMessage.includes("FORBIDDEN")
        ? errorMessage.split("FORBIDDEN ")[1]
        : errorMessage;

      Alert.alert("Error", cleanMessage);
    }
  };

  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Ubah Password"} />
      <View className='flex-col gap-[20]'>
        <View className='px-[15] py-[15] bg-white rounded-xl'>
          <CustomInput
            title={"Password Lama"}
            value={oldPassword}
            handleChangeText={setOldPassword}
            placeholder={"Masukkan password lama"}
            secureTextEntry={true}
          />
        </View>

        <View className='px-[15] py-[15] bg-white rounded-xl'>
          <CustomInput
            title={"Password Baru"}
            value={newPassword}
            handleChangeText={setNewPassword}
            placeholder={"Masukkan password baru"}
            secureTextEntry={true}
          />
        </View>

        <CustomButton
          buttonHandling={changePasswordHandler}
          customStyle={"bg-soil"}
          title={"Ubah Password"}
        />
      </View>
    </SafeAreaView>
  );
}
