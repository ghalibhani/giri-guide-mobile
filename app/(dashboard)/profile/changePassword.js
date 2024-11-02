import { View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import PasswordChange from "../../../components/PasswordChange";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../../components/miniComponent/CustomInput";

export default function ChangePasswordScreen() {
  const changePasswordHandler = () => {
    
  }
  return (
    <SafeAreaView className='flex-1 px-6'>
      <HeaderBackProfile text={"Ubah Password"} />
      <View className='flex-col gap-[20]'>
        <View className="px-[15] py-[15] bg-white rounded-xl">
          <CustomInput 
            title={"Password Lama"}
            placeholder={"Masukkan password lama"}
            secureTextEntry={true}
          />
        </View>
        
        <View className="px-[15] py-[15] bg-white rounded-xl">
          <CustomInput 
            title={"Password Baru"}
            placeholder={"Masukkan password baru"}
            secureTextEntry={true}
          />
        </View>

        <CustomButton 
          buttomHandling={changePasswordHandler}
          customStyle={"bg-soil"}
          title={"Ubah Password"}
        />
      </View>
    </SafeAreaView>
  );
}
