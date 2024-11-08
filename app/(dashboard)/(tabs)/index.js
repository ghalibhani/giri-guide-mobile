import React, { useEffect } from "react";
import HomeMainCustomerScreen from "../home/homeMainCustomerScreen";
import HomeMainTourGuideScreen from "../homeGuide/homeMainTourGuide";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRefresh } from "../../../redux/authSlice";
import { useRouter } from "expo-router";
import { View, Image } from "react-native";
import { fetchAllMountains } from "../../../redux/mountainSlice";
import { useSelector } from "react-redux";
import {
  fetchProfileCustomer,
} from "../../../redux/profileSlice";

export default function Index() {
  const [isCustomer, setIsCustomer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  // const userId = useSelector((state) => state.auth.userId);
  // const profile = useSelector((state) => state.profile);

  // useEffect(() => {
  //   dispatch(fetchProfileCustomer(userId));
  //   console.log(profile)
  // }, [dispatch, userId]);

  useEffect(() => {
    const checkLoginAndRole = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const role = await AsyncStorage.getItem("userRole");
        const userId = await AsyncStorage.getItem("userId");
        const email = await AsyncStorage.getItem("email");
        const name = await AsyncStorage.getItem("guideName");

        if (!token) {
          return router.replace("/login");
        }

        dispatch(loginRefresh({ token, role, userId, email, name }));

        setIsCustomer(role === "ROLE_CUSTOMER");
      } catch (error) {
        router.replace("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginAndRole();
  }, []);

  if (isLoading) {
    return (
      <View className='flex-1 items-center justify-center bg-white'>
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  return isCustomer ? <HomeMainCustomerScreen /> : <HomeMainTourGuideScreen />;
}
