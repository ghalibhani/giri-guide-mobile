import HomeProfileGuideScreen from "../profile/homeProfileGuide";
import HomeProfileScreen from "../profile/homeProfile";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

export default function ProfileScreen() {
  const [isCustomer, setIsCustomer] = useState(false);

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
        console.log("Error checking login status:", error);
      }
    };

    checkRole();
  }, []);

  if (isCustomer) {
    return <HomeProfileScreen />;
  } else {
    return <HomeProfileGuideScreen />;
  }
}
