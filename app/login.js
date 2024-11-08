import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomInput from "../components/miniComponent/CustomInput";
import CustomButton from "../components/miniComponent/CustomButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { router } from "expo-router";
import TextInvalidRed from "../components/miniComponent/TextInvalidRed";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("kokoro@email.com");
  const [password, setPassword] = useState("admin123");
  const [cleanMessage, setCleanMessage] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setCleanMessage("Email and Password cannot be empty");
      return;
    }
    try {
      const credentials = { email, password };
      await dispatch(login(credentials)).unwrap();
    } catch (error) {
      const errorMessage =
        error.message || error.response?.data || "Terjadi kesalahan";

      // Bersihkan pesan error tanpa `useEffect`
      const cleaned = errorMessage.includes("UNAUTHORIZED")
        ? errorMessage.split("UNAUTHORIZED ")[1].replace(/['"]+/g, "")
        : errorMessage.replace(/['"]+/g, "");
      setCleanMessage(cleaned);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View className='flex-1 justify-center p-[24] bg-white'>
      <Image
        source={require("../assets/logoFixedWithText.png")}
        className='w-[200] h-[200] mb-[30] mx-auto'
      />
      <Text className='text-xl text-soil font-ibold mb-9'>
        Selamat Datang di GiriGuide
      </Text>

      <CustomInput
        title={"Email Address"}
        value={email}
        autoCapitalize={false}
        handleChangeText={setEmail}
        placeholder={"Email Address"}
        keyboardType={"email-address"}
        customStyles={"mb-[20]"}
      />
      <CustomInput
        title={"Password"}
        value={password}
        handleChangeText={setPassword}
        placeholder={"Password"}
        secureTextEntry={true}
        autoCapitalize={false}
        customStyles={"mb-[20]"}
      />

      {cleanMessage ? <TextInvalidRed errorMessage={cleanMessage} /> : null}

      <CustomButton
        title={"Login"}
        customStyle={"bg-soil"}
        buttonHandling={handleLogin}
      />

      <View className='flex-row items-center justify-center mt-[16]'>
        <Text className='text-thistle text-sm font-iregular'>
          Belum punya akun?
        </Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text className='text-soil text-sm font-isemibold ml-1'>
            Daftar sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
