import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderComponent = ({ children, text, handleOnPress }) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  const handleScroll = (event) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    if (y > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };
  return (
    <SafeAreaView className="bg-[#f8f8f8]">
      <StatusBar
        backgroundColor="#503a3a"
        barStyle={statusBarStyle}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />
      <View className="w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil px-6 pt-5 pb-7 mb-5">
        <View className="flex flex-col justify-center items-center mb-[5px]">
          <Ionicons
            name="arrow-back"
            size={24}
            color={"#FBF6D9"}
            className="absolute top-2 left-3 z-50"
            onPress={handleOnPress}
          />
          <Text className="text-xl font-bold text-ivory">{text}</Text>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default HeaderComponent;
