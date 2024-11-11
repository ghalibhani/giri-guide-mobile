import { View, Image, Text, TouchableOpacity, Alert, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomInput from "../components/miniComponent/CustomInput";
import CustomButton from "../components/miniComponent/CustomButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { router, useLocalSearchParams } from "expo-router";
import TextInvalidRed from "../components/miniComponent/TextInvalidRed";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

export default function LoginScreen() {
  const { currentStageToBeParsed } = useLocalSearchParams()
  // console.log(currentStageToBeParsed)

  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cleanMessage, setCleanMessage] = useState("");

  const [currentStage, setCurrentStage] = useState(1);

  const images = [
    require('../assets/1.png'),
    require('../assets/2.png'),
    require('../assets/3.png'),
  ];

  const imageScale = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  const nextStage = () => {
    setCurrentStage((prevStage) => prevStage + 1);
  };

  useEffect(() => {
    if (currentStageToBeParsed) {
      const parsedStage = parseInt(currentStageToBeParsed);
      if (!isNaN(parsedStage)) {
        setCurrentStage(parsedStage);
      }
    }
  }, [currentStageToBeParsed]);

  useEffect(() => {
    imageScale.value = 0;
    contentOpacity.value = 0;

    imageScale.value = withSpring(1, { damping: 10, stiffness: 100 });
    contentOpacity.value = withTiming(1, { duration: 500 });
  }, [currentStage]);

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: imageScale.value }],
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("");
    }
  }, [isLoggedIn]);

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

  const handleRegister = () => {
    setCurrentStage(4)
    router.push("/register");
  };

  return (
    <SafeAreaView className='flex-1 justify-center p-[24] bg-white'>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"} />
      {currentStage !== 4 ? (
        <>
            <Animated.Image
              source={images[currentStage - 1]}
              style={[{ width: '100%', height: 253, marginBottom: 40 }, imageAnimatedStyle]}
              className="mx-auto"
            />

            <View className="gap-20">
              <View className="gap-8">
                <Animated.Text style={[contentAnimatedStyle]} className="font-ibold text-soil text-2xl text-center">
                  {currentStage === 1 && "Eksplorasi Gunung\ndi Jawa Timur"}
                  {currentStage === 2 && "Tour Guide Profesional\nSiap Mendampingi"}
                  {currentStage === 3 && "Rute dan Info Lengkap\nGunung"}
                </Animated.Text>

                <Animated.Text style={[contentAnimatedStyle]} className="font-imedium text-evergreen text-sm text-center">
                  {currentStage === 1 && "Temukan gunung-gunung terbaik di Jawa Timur. Siapkan dirimu untuk menikmati panorama alam yang luar biasa dari setiap puncak."}
                  {currentStage === 2 && "Butuh pendamping? Kami menyediakan tour guide profesional yang siap menemani pendakian Anda"}
                  {currentStage === 3 && "Lihat rute perjalanan terbaik untuk menuju gunung dan informasi lengkap tentang gunung-gunung di Jawa Timur"}
                </Animated.Text>
              </View>
              
              <View className="gap-8">
                <Animated.View style={[contentAnimatedStyle]}>
                  <CustomButton
                    buttonHandling={nextStage}
                    customStyle={`min-w-full z-10 ${currentStage === 3 ? 'bg-evergreen' : 'bg-soil'}`}
                    title={currentStage === 3 ? "Login" : "Lanjut"}
                  />
                </Animated.View>

                <View className="flex-row justify-center gap-4 items-center">
                  <View className={`rounded-full h-3 w-3 ${currentStage === 1 ? 'bg-evergreen' : 'bg-thistle'}`} />
                  <View className={`rounded-full h-3 w-3 ${currentStage === 2 ? 'bg-evergreen' : 'bg-thistle'}`} />
                  <View className={`rounded-full h-3 w-3 ${currentStage === 3 ? 'bg-evergreen' : 'bg-thistle'}`} />
                </View>
              </View>
            </View>
        </>
    ) : (
      <>
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
      </>
    )}
    </SafeAreaView>
  );
}
