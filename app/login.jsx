import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import ReusableInput from "../components/ReusableForm";

export default function LoginScreen() {
  const fields = [
    {
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      keyboardType: "email-address",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      secureTextEntry: true,
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation();

  const navigateToRegister = () => {
    navigate.replace("Register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (formData) => {
    if (Object.keys(formData).length === 0) {
      alert("Silakan isi semua field terlebih dahulu");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password harus lebih dari 8 karakter");
      return;
    }
    alert("Akun berhasil dibuat");
  };

  return (
    <View className='flex-1 justify-center p-[24] bg-white'>
      <Image
        source={require("../assets/logo-dummy.jpg")}
        className='w-[200] h-[200] mb-[30] mx-auto'
      />
      <Text className='text-2xl font-bold mb-5'>
        Selamat Datang di GiriGuide
      </Text>

      <ReusableInput
        fields={fields}
        onSubmit={handleLogin}
        submitButtonText='Login'
      />

      <View className='flex-row items-center justify-center mt-[16]'>
        <Text>Belum punya akun?</Text>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text className='text-blue-500 font-semibold ml-1'>
            Daftar sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
