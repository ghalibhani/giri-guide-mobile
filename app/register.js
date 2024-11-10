import { View, Text, ScrollView, TouchableOpacity, StatusBar, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/miniComponent/CustomInput";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import CustomButton from "../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { createNewHiker } from "../redux/registerSlice";
import { router, useLocalSearchParams } from "expo-router";

export default function RegisterScreen() {
  
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.register);

  const [nik, setNik] = useState('');
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('')

  const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Pria", value: "MALE" },
    { label: "Wanita", value: "FEMALE" },
  ]);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formErrors, setFormErrors] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showBirthDatePickerHandler = () => {
      setShowBirthDatePicker(true);
  };

  const onChangeBirthDate = (event, selectedDate) => {
      const currentDate = selectedDate || birthDate;
      setShowBirthDatePicker(!showBirthDatePicker);
      setBirthDate(currentDate);
  };

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(date);
  }

  function formatDateToYYYYMMDD(date) {
    if (!(date instanceof Date)) {
      throw new Error("Input harus berupa objek Date");
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Menambahkan 1 ke bulan
    const day = String(date.getDate()).padStart(2, '0'); // Memastikan dua digit

    return `${year}-${month}-${day}`;
  }

  const validate = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    const regexInteger = /^\d+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    let formErr = {}

    if(!nik) {
      formErr.nik = "NIK harus diisi"
    } else if(!regexInteger.test(nik)){
      formErr.nik = "Format NIK tidak valid"
    } else if(nik.length > 16 || nik.length < 16){
      formErr.nik = "Format NIK harus 16 angka"
    }

    if(!fullName) {
      formErr.fullName = "Nama lengkap harus diisi"
    }

    if(gender !== "MALE" && gender !== "FEMALE") {
      formErr.gender = "Jenis kelamin harus dipilih"
    }

    if(!address) {
      formErr.address = "Alamat harus diisi"
    }

    if(!email) {
      formErr.email = "Email harus diisi"
    } else if (!regexEmail.test(email)){
      formErr.email = "Format email tidak valid"
    }

    if(!password) {
      formErr.password = "Password harus diisi"
    } else if(password.length < 8) {
      formErr.password = "Password min 8 karakter"
    } else if (!regexPassword.test(password)){
      formErr.password ="Password harus mengandung min. 1 huruf kapital, 1 huruf kecil, dan 1 simbol"
    }

    if(!konfirmasiPassword) {
      formErr.konfirmasiPassword = "Konfirmasi password harus diisi"
    } else if(password !== konfirmasiPassword) {
      formErr.konfirmasiPassword ="Konfirmasi password tidak cocok"
    }

    setFormErrors(formErr)
    return Object.keys(formErr).length === 0
  }

  const generateNewHikerData = () => {
    const jsonString = JSON.stringify({
      fullName: fullName,
      email: email,
      password: password,
      birthDate: formatDateToYYYYMMDD(birthDate),
      nik: nik,
      address: address,
      gender: gender
    })
    return jsonString
  }

  const handleRegister = async () => {
    if(!validate()) return;

    try{
      const jsonString = generateNewHikerData()
      await dispatch(createNewHiker(jsonString)).unwrap()
      setFormErrors('')
      setErrorMessage('')
      setSuccessMessage("Registrasi berhasil!")
      setFormErrors('')
      setNik('')
      setFullName('')
      setBirthDate(new Date())
      setGender('')
      setAddress('')
      setEmail('')
      setPassword('')
      setKonfirmasiPassword('')
    } catch(e) {
      setSuccessMessage('')
      setErrorMessage("Email atau NIK sudah terdaftar");
    }
  };

  const handleNavigateToLogin = () => {
    router.replace(`/login?currentStageToBeParsed=4`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"} />
      <ScrollView className="mt-5 px-6 mb-5">
        <View className="gap-3">
          <Text className="text-xl text-soil font-ibold">Bergabung dengan GiriGuide</Text>
          <Text className="text-sm text-thistle font-iregular">Buat akunmu dan mulai petualangan gunung dengan panduan ahli serta informasi jalur yang terpercaya.</Text>
        </View>

        <View className="mt-9 gap-5">
          <View className="gap-2">
            <CustomInput 
              title={"NIK"}
              keyboardType='number-pad'
              placeholder={"Masukkan NIK "}
              value={nik}
              handleChangeText={setNik}
            />
            {formErrors.nik && <Text className="font-iregular text-errorHover text-sm">{formErrors.nik}</Text>}
          </View>

          <View className="gap-2">
            <CustomInput 
              title={"Nama Lengkap"}
              placeholder={"Masukkan nama lengkap "}
              value={fullName}
              handleChangeText={setFullName}
            />
            {formErrors.fullName && <Text className="font-iregular text-errorHover text-sm">{formErrors.fullName}</Text>}
          </View>

          <View className="gap-2">
            <Text className="font-ibold text-sm text-evergreen">Tanggal Lahir</Text>

            <View className="flex-row border-[1px] rounded-xl border-borderCustom items-center justify-between bg-white px-4 py-[14px]">

              <TouchableOpacity onPress={showBirthDatePickerHandler}>
                <Text className="font-imedium text-base color-evergreen">{formattedDate(birthDate)}</Text>
              </TouchableOpacity>
              {showBirthDatePicker && (
                <DateTimePicker 
                    value={birthDate}
                    mode='date'
                    display='default'
                    onChange={onChangeBirthDate}
                />
              )}
            </View>
          </View>

          <View className="gap-2">
            <Text className="font-ibold text-sm text-evergreen">Jenis Kelamin</Text>

            <View className="flex-row border-[1px] rounded-xl border-borderCustom items-center justify-between bg-white px-4 py-[14px]">
              <DropDownPicker
                open={open}
                value={gender || null}
                items={items}
                setOpen={setOpen}
                setValue={setGender}
                setItems={setItems}
                dropDownDirection='TOP'
                dropDownContainerStyle={{
                    backgroundColor: "#fafafa", 
                    borderColor: "#503A3A", 
                    maxWidth: "150%",
                    zIndex: 1000,
                    padding: 0,
                    
                    marginVertical: 0
                }}
                style={{
                    borderColor:"transparent",
                    backgroundColor: "#fff",
                    maxWidth: "150%",
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    maxHeight: 30,
                    padding: 0,
                }}
                textStyle={{
                    fontSize: 14,
                    color: "#45594E",
                    padding: 0,
                }}
                labelStyle={{
                    fontFamily: "Inter-Medium"
                }}
                placeholder="Pilih Jenis Kelamin"
                placeholderStyle={{
                    color: "#45594E",
                    fontFamily: "Inter-Medium"                                
                }}
                arrowIconStyle={{
                    width: 20,
                    height: 20,
                }}
                arrowColor="#503A3A"
                selectedItemContainerStyle={{
                    backgroundColor: "#ECD768",
                }}
                selectedItemLabelStyle={{
                    color: "#45594E",
                }}
                listItemContainerStyle={{
                    borderColor: "#fafafa", 
                }}
                listItemLabelStyle={{
                    color: "#45594E",
                }}
                listMode='SCROLLVIEW'
                onChangeValue={setGender}
              />
            </View>
            {formErrors.gender && <Text className="font-iregular text-errorHover text-sm">{formErrors.gender}</Text>}
          </View>

          <View className="gap-2">
            <Text className="font-ibold text-sm text-evergreen">Alamat</Text>

            <View className="flex-row border-[1px] rounded-xl border-borderCustom items-center justify-between bg-white px-4 py-[14px]">
              <TextInput 
                className=" text-evergreen font-iregular text-sm flex-1"
                value={address}
                placeholder={"Masukkan alamat"}
                placeholderTextColor="#91A0B8"
                onChangeText={setAddress}
                multiline={true}
                numberOfLines={4}
                style={{ textAlignVertical: 'top' }} 
              />
            </View>

            {formErrors.address && <Text className="font-iregular text-errorHover text-sm">{formErrors.address}</Text>}
        </View>

        <View className="gap-2">
          <CustomInput 
            title={"Email"}
            placeholder={"Masukkan email "}
            value={email}
            keyboardType={"email-address"}
            handleChangeText={setEmail}
            autoCapitalize={"none"}
          />
          {formErrors.email && <Text className="font-iregular text-errorHover text-sm">{formErrors.email}</Text>}
        </View>

        <View className="gap-2">
          <CustomInput 
            title={"Password"}
            placeholder={"Masukkan password"}
            value={password}
            handleChangeText={setPassword}
            secureTextEntry={true}
          />
          {formErrors.password && <Text className="font-iregular text-errorHover text-sm">{formErrors.password}</Text>}
        </View>

        <View className="gap-2">
          <CustomInput 
            title={"Konfirmasi Password"}
            placeholder={"Konfirmasi password"}
            value={konfirmasiPassword}
            handleChangeText={setKonfirmasiPassword}
            secureTextEntry={true}
          />
          {formErrors.konfirmasiPassword && <Text className="font-iregular text-errorHover text-sm">{formErrors.konfirmasiPassword}</Text>}
        </View>

        <View className="items-center justify-center flex-1">
          <CustomButton
            buttonHandling={handleRegister}
            customStyle="bg-soil w-full"
            title="Daftar"
          />
        </View>

        {errorMessage && 
          <View className="rounded-xl border-errorHover bg-errorLight px-5 py-5">
              <Text className="text-sm font-iregular text-errorHover">{errorMessage}</Text>
          </View>
        }

        {successMessage && 
          <View className="rounded-xl border-successHover bg-successLight px-5 py-5">
              <Text className="text-sm font-iregular text-successHover">Kamu berhasil mendaftar! Silahkan ke halaman login untuk eksplorasi gunung di Jawa Timur</Text>
          </View>
        }


        <View className="flex-row items gap-3 justify-center">
          <Text className="text-thistle font-iregular text-sm">Sudah punya akun?</Text>
          <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text className="text-soil font-ibold text-sm">Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
