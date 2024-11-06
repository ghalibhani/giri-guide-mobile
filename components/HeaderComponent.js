import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSubMenu from "./miniComponent/HeaderSubMenu";
import CustomButton from "./miniComponent/CustomButton";

const HeaderComponent = ({
  children,
  text,
  withFixedButton = false,
  linkFixedButton = "/",
  hikingPoint = [],
  mountainStatus,
  findTourGuideHandler,
  // selectedHikingPointId='',
  // selectedHikingPointName='',
  // selectedMountainId=''
}) => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  return (
    <SafeAreaView className='bg-[#f8f8f8] flex-1'>
      <StatusBar
        backgroundColor='#503A3A'
        barStyle={"light-content"}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />

      <View className='bg-soil pt-4 pb-7 gap-6 rounded-b-verylarge mb-5'>
        <HeaderSubMenu title={text} />
      </View>

      <ScrollView className='flex-grow pb-40' style={{ height: "90%" }}>
        {children}
      </ScrollView>

      {withFixedButton &&
        hikingPoint.length !== 0 &&
        mountainStatus !== "SIAGA" &&
        mountainStatus !== "AWAS" && (
          <View className='bg-white flex-1 w-full'>
            <CustomButton
              title={"Cari tour guide untuk gunung ini"}
              buttonHandling={findTourGuideHandler}
              customStyle={"bg-soil absolute bottom-5 left-5 right-5"}
            />
          </View>
        )}

      {withFixedButton && hikingPoint.length === 0 && (
        <View className='bg-white flex-1 w-full'>
          <CustomButton
            title={"Belum ada tour guide untuk gunung ini"}
            buttonHandling={findTourGuideHandler}
            customStyle={"bg-info absolute bottom-5 left-5 right-5"}
            isDisabled={true}
          />
        </View>
      )}

      {withFixedButton &&
        hikingPoint.length !== 0 &&
        (mountainStatus === "SIAGA" || mountainStatus === "AWAS") && (
          <View className='bg-white flex-1 w-full'>
            <CustomButton
              buttonHandling={findTourGuideHandler}
              title={"Gunung tidak memungkinkan untuk didaki!"}
              customStyle={"bg-errorHover absolute bottom-5 left-5 right-5"}
              isDisabled={true}
            />
          </View>
        )}
    </SafeAreaView>
  );
};

export default HeaderComponent;
