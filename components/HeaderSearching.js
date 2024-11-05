import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HeaderSubMenu from "./miniComponent/HeaderSubMenu";

const HeaderSearching = ({choosenMountain, choosenHikingPoint}) => {
  return (
    // <View className="w-screen rounded-b-[30px] bg-soil px-[24px]">
    //   <View className="flex flex-col justify-center items-center mb-[5px] mt-2">
    //     <TouchableOpacity className="w-[30]  h-[30] rounded-full bg-white border-[1px] border-soil justify-center items-center absolute left-3">
    //       <Ionicons
    //         name="chevron-back"
    //         size={15}
    //         color="#503A3A"
    //         onPress={() => router.back()}
    //       />
    //     </TouchableOpacity>

    //     <Text className="text-[20px] font-bold text-ivory">
    //       Pencarian tour guide
    //     </Text>
    //   </View>

    //   <Text className="text-[12px] font-normal text-ivory mb-5 text-center">
    //     Titik pendakian
    //   </Text>
    // </View>

    <View className="bg-soil pb-7 rounded-b-verylarge mb-5">
        <View className='ml-6 mt-6'>
          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={() => router.back()}
              className='bg-ivory w-[30] h-[30] mt- items-center justify-center rounded-full'
            >
              <View className='justify-center items-center'>
                <Ionicons name={"chevron-back"} size={15} color={"#503A3A"} />
              </View>
            </TouchableOpacity>

            <View className="absolute left-1/2 -translate-x-1/2 gap-2">
              <Text className='color-ivory text-center  text-base justify-center font-isemibold'>
                {choosenMountain}
              </Text>

              <Text className='color-ivory text-xs justify-center text-center font-isemibold'>
                {choosenHikingPoint}
              </Text>
            </View>
          </View>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({});

export default HeaderSearching;
