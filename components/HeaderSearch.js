import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const HeaderSearch = () => {
  const [mountain, setMountain] = useState("");
  const [positionOfInterest, setPositionOfInterest] = useState("");
  const navigate = useNavigation();
  return (
    <View
      className={`w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil pt-[64px] pb-[24px] px-[24px] h-[359px]`}>
      <View className="flex flex-col justify-center items-center mb-[60px]">
        <Ionicons
          name="arrow-back"
          size={24}
          color={"#FBF6D9"}
          className="absolute top-2 left-3 z-50"
          onPress={() => navigate.navigate("Home")}
        />
        <Text className="text-[20px] font-bold text-ivory">
          Pencarian tour guide
        </Text>
      </View>

      <Text className="text-[20px] font-bold text-ivory mb-5 text-center">
        Gambar gunung
      </Text>

      <View className="p-[15px] bg-white rounded-xl">
        <View className="border-[1px] border-[#d9d9d9] rounded-xl p-[10px] flex flex-col mb-5 justify-center">
          <View className="flex flex-row items-center">
            <FontAwesome6
              name="mountain-sun"
              size={20}
              color="black"
              className="w-10 h-full relative top-6"
            />
            <Text className="ml-2">Tujuan gunung</Text>
          </View>
          <Picker
            selectedValue={mountain}
            onValueChange={(itemValue) => setMountain(itemValue)}
            style={{ height: 50, width: "80%", marginLeft: 29 }}>
            <Picker.Item label="Pilihan gunung" value="" />
            <Picker.Item label="Gunung Gede" value="Gunung Gede" />
            <Picker.Item
              label="Gunung Gede Pangrango"
              value="Gunung Gede Pangrango"
            />
            <Picker.Item label="Gunung Salak" value="Gunung Salak" />
          </Picker>
        </View>
        <View className="border-[1px] border-[#d9d9d9] rounded-xl p-[10px] flex flex-col mb-5 justify-center">
          <View className="flex flex-row items-center">
            <FontAwesome6
              name="mountain-sun"
              size={20}
              color="black"
              className="w-10 h-full relative top-6"
            />
            <Text className="ml-2">Titik pendakian</Text>
          </View>
          <Picker
            selectedValue={positionOfInterest}
            onValueChange={(itemValue) => setPositionOfInterest(itemValue)}
            style={{ height: 50, width: "80%", marginLeft: 29 }}>
            <Picker.Item label="Pilihan titik pendakian" value="" />
            <Picker.Item label="Titik pendakian 1" value="Titik pendakian 1" />
            <Picker.Item label="Titik pendakian 2" value="Titik pendakian 2" />
            <Picker.Item label="Titik pendakian 3" value="Titik pendakian 3" />
          </Picker>
        </View>
        <TouchableOpacity
          className="w-full bg-soil rounded-xl h-12 flex items-center justify-center"
          onPress={() => navigate.navigate("Searching")}>
          <Text className="text-ivory font-bold">Cari tour guide</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSearch;
