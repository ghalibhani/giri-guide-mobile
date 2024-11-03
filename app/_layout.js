// import { router, Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Provider } from "react-redux";
// import store from "../store";
// import "../global.css";

// export default function RootLayout() {
//   const [fontsLoaded] = useFonts({
//     "Inter-Thin": require("./../assets/fonts/Inter-Thin.otf"),
//     "Inter-ExtraLight": require("./../assets/fonts/Inter-ExtraLight.otf"),
//     "Inter-Light": require("./../assets/fonts/Inter-Light.otf"),
//     "Inter-Regular": require("./../assets/fonts/Inter-Regular.otf"),
//     "Inter-Medium": require("./../assets/fonts/Inter-Medium.otf"),
//     "Inter-SemiBold": require("./../assets/fonts/Inter-SemiBold.otf"),
//     "Inter-Bold": require("./../assets/fonts/Inter-Bold.otf"),
//     "Inter-ExtraBold": require("./../assets/fonts/Inter-ExtraBold.otf"),
//     "Inter-Black": require("./../assets/fonts/Inter-Black.otf"),
//   });

//   const [initialRoute, setInitialRoute] = useState(null); // Mengatur initial route state

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       try {
//         const token = await AsyncStorage.getItem("token");
//         setInitialRoute(token ? "(dashboard)" : "login");
//         console.log("Initial route:", initialRoute);
//         router.replace(initialRoute);
//       } catch (error) {
//         console.log("Error checking login status:", error);
//         setInitialRoute("login");
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   // Pastikan untuk melakukan replace hanya jika initialRoute sudah di-set
//   useEffect(() => {
//     if (initialRoute) {
//       router.replace(initialRoute);
//     }
//   }, [initialRoute]);

//   if (!fontsLoaded || initialRoute === null) {
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <Stack
//         initialRouteName={initialRoute}
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name='login' />
//         <Stack.Screen name='(dashboard)' />
//       </Stack>
//     </Provider>
//   );
// }

import { router, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from "../store";
import "../global.css";
import { View, Text } from "react-native";
import SplashScreen from "../components/loading/SplashScreen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-Thin": require("./../assets/fonts/Inter-Thin.otf"),
    "Inter-ExtraLight": require("./../assets/fonts/Inter-ExtraLight.otf"),
    "Inter-Light": require("./../assets/fonts/Inter-Light.otf"),
    "Inter-Regular": require("./../assets/fonts/Inter-Regular.otf"),
    "Inter-Medium": require("./../assets/fonts/Inter-Medium.otf"),
    "Inter-SemiBold": require("./../assets/fonts/Inter-SemiBold.otf"),
    "Inter-Bold": require("./../assets/fonts/Inter-Bold.otf"),
    "Inter-ExtraBold": require("./../assets/fonts/Inter-ExtraBold.otf"),
    "Inter-Black": require("./../assets/fonts/Inter-Black.otf"),
  });

  const [initialRoute, setInitialRoute] = useState("loading"); // Default to loading state

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token !== null) {
          setInitialRoute("(dashboard)");
          return;
        } else {
          setInitialRoute("login");
          return;
        }
      } catch (error) {
        console.log("Error checking login status:", error);
        setInitialRoute("login");
      }
    };

    checkLoginStatus();
  }, []);

  if (!fontsLoaded || initialRoute === "loading") {
    return <SplashScreen></SplashScreen>;
  }

  return (
    <Provider store={store}>
      <Stack
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='login' />
        <Stack.Screen name='(dashboard)' />
      </Stack>
    </Provider>
  );
}
