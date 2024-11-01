import { View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import PasswordChange from "../../../components/PasswordChange";

export default function ChangePasswordScreen() {
  return (
    <View className='flex-1 px-6'>
      <HeaderBackProfile text={"Ubah Password"} />
      <View className='flex-col gap-[20]'>
        <PasswordChange
          label={"Password Lama"}
          placeholder={"Masukkan Password Lama"}
        />
        <PasswordChange
          label={"Password Baru"}
          placeholder={"Masukkan Password Baru"}
        />
      </View>
    </View>
  );
}
