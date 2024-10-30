import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation();

  const navigateToRegister = () => {
    navigate.replace("Register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      {/* form */}
      <Text className='mb-2 text-left'>Email Address</Text>
      <TextInput
        className='border border-gray-300 p-3 mb-4 w-full rounded-xl'
        placeholder='name@email.com'
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <Text className='mb-2 text-left'>Password</Text>
      <View className='relative mb-4 w-full'>
        <TextInput
          className='border border-gray-300 p-3 mb-4 w-full rounded-xl'
          placeholder='******************'
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          className='absolute right-3 top-[15]'
        >
          <Text className='text-blue-500'>
            {showPassword ? (
              <Entypo name='eye' size={20} color='black' />
            ) : (
              <Entypo name='eye-with-line' size={20} color='black' />
            )}
          </Text>
        </TouchableOpacity>
      </View>

      <Text className='mb-[20]'>Forgot Password?</Text>

      <TouchableOpacity className='bg-blue-500 h-14 w-full justify-center items-center rounded-xl'>
        <Text className='text-white'>Login</Text>
      </TouchableOpacity>

      <View className='flex-row items-center justify-center mt-[16]'>
        <Text>Belum punya akun?</Text>
        <TouchableOpacity onPress={navigateToRegister}>
          <Text className='text-blue-500 ml-1'>Daftar sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
