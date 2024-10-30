import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ReusableInput from "../components/ReusableForm";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const fields = [
    {
      name: "nik",
      label: "NIK",
      placeholder: "NIK",
      keyboardType: "numeric",
      required: true,
    },
    {
      name: "fullname",
      label: "Nama Lengkap",
      placeholder: "Nama Lengkap",
      keyboardType: "default",
      required: true,
    },
    {
      name: "gender",
      label: "Jenis Kelamin",
      placeholder: "Jenis Kelamin",
      type: "gender",
      required: true,
    },
    {
      name: "birthdate",
      label: "Tanggal Lahir",
      placeholder: "Tanggal Lahir",
      keyboardType: "date",
      secureTextEntry: true,
      required: true,
    },
    {
      name: "address",
      label: "Alamat",
      placeholder: "Alamat",
      keyboardType: "default",
      multiline: true,
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      keyboardType: "email-address",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Password",
      keyboardType: "default",
      secureTextEntry: true,
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Konfirmasi Password",
      placeholder: "Konfirmasi Password",
      keyboardType: "default",
      secureTextEntry: true,
      required: true,
    },
  ];

  const navigate = useNavigation();

  const handleRegister = (formData) => {
    if (Object.keys(formData).length === 0) {
      alert("Silakan isi semua field terlebih dahulu");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    console.log(formData);
  };

  const handleNavigateToLogin = () => {
    navigate.replace("Login");
  };

  return (
    <ScrollView>
      <View className='flex-1 p-[24] bg-white'>
        <Text className='text-xl mt-[20] font-bold mb-5'>
          Bergabung dengan GiriGuide
        </Text>
        <Text className='mb-[39] text-left'>
          Buat akunmu dan mulai petualangan gunung dengan panduan ahli serta
          informasi jalur yang terpercaya
        </Text>

        <ReusableInput
          fields={fields}
          onSubmit={handleRegister}
          submitButtonText='Daftar'
        />

        <View className='flex-row justify-center mt-5'>
          <Text>Sudah punya akun?</Text>
          <TouchableOpacity onPress={handleNavigateToLogin}>
            <Text className='ml-1 font-semibold text-blue-500'>
              Login sekarang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
