import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderComponent = ({
  children,
  text,
  withFixedButton = false,
  linkFixedButton = "/",
}) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  return (
    <SafeAreaView className="bg-[#f8f8f8] flex-1">
      <StatusBar
        backgroundColor="#503a3a"
        barStyle={statusBarStyle}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />

      <View className="w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil px-6 pt-5 pb-7 mb-5">
        <View className="flex flex-col justify-center items-center">
          <TouchableOpacity className="w-[30] h-[30] rounded-full bg-white border-[1px] border-soil justify-center items-center absolute left-3">
            <Ionicons
              name="chevron-back"
              size={15}
              color="#503A3A"
              onPress={() => router.back()}
            />
          </TouchableOpacity>
          <Text className="text-xl font-ibold text-ivory">{text}</Text>
        </View>
      </View>

      <ScrollView className="flex-grow pb-40" style={{ height: "90%" }}>
        {children}
      </ScrollView>

      {withFixedButton && (
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            paddingVertical: 15,
            backgroundColor: "#503a3a",
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={() => router.push(linkFixedButton)}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "bold" }}>
            Cari tour guide untuk gunung ini
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default HeaderComponent;
