import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileScreen from "./screen/ProfileScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            options={{ headerShown: false }}
            component={LoginScreen}
          />
          <Stack.Screen
            name='Register'
            options={{ headerShown: false }}
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
