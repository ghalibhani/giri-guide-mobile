import HomeProfileGuideScreen from "../profile/homeProfileGuide";
import HomeProfileScreen from "../profile/homeProfile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { View, Image } from "react-native";

export default function ProfileScreen() {
  const [isCustomer, setIsCustomer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRole = async () => {
      try {
        const role = await AsyncStorage.getItem("userRole");
        if (role === "ROLE_CUSTOMER") {
          setIsCustomer(true);
        } else {
          setIsCustomer(false);
        }
      } catch (error) {
        // console.log("Error checking login status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkRole();
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
  return isCustomer ? <HomeProfileScreen /> : <HomeProfileGuideScreen />;
}
