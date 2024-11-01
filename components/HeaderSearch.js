import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

const HeaderSearch = () => {
  const [mountain, setMountain] = useState("");
  const [positionOfInterest, setPositionOfInterest] = useState("");

  const handlePress = () => {
    if (mountain && positionOfInterest) {
      router.navigate("/home/searching");
    } else {
      Alert.alert("Dibutuhkan", "Isi semua kolom untuk pencarian");
    }
  };

  return (
    <View
      className={`w-screen rounded-br-[30px] rounded-bl-[30px] bg-soil pb-[24px] px-[24px] h-[340px]`}>
      <View className="flex flex-col justify-center items-center mb-[60px]">
        <Ionicons
          name="arrow-back"
          size={24}
          color={"#FBF6D9"}
          className="absolute top-2 left-3 z-50"
          onPress={() => router.replace("/")}
        />
        <Text className="text-[20px] font-bold text-ivory">
          Pencarian tour guide
        </Text>
      </View>

      <Text className="text-[20px] font-bold text-ivory mb-5 text-center">
        Gambar gunung
      </Text>

      <View className="p-4 bg-white rounded-xl">
        <View className="border-[1px] border-[#d9d9d9] rounded-xl p-[10px] flex flex-col mb-5 justify-center">
          <View className="flex flex-row items-center">
            <FontAwesome6
              name="mountain-sun"
              size={15}
              color="#ecd768"
              className="w-10 h-full relative top-5"
            />
            <Text className="ml-2 text-xs text-thistle">Tujuan gunung</Text>
          </View>
          <Picker
            selectedValue={mountain}
            onValueChange={(itemValue) => setMountain(itemValue)}
            style={{
              height: 50,
              width: "80%",
              marginLeft: 29,
              marginTop: -10,
              fontSize: 16,
              color: "#45594e",
            }}>
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
              size={15}
              color="#ecd768"
              className="w-10 h-full relative top-5"
            />
            <Text className="ml-2 text-thistle text-xs">Titik pendakian</Text>
          </View>
          <Picker
            selectedValue={positionOfInterest}
            onValueChange={(itemValue) => setPositionOfInterest(itemValue)}
            style={{
              height: 50,
              width: "80%",
              marginLeft: 29,
              marginTop: -10,
              fontSize: 16,
              color: "#45594e",
            }}>
            <Picker.Item label="Pilihan titik pendakian" value="" />
            <Picker.Item label="Titik pendakian 1" value="Titik pendakian 1" />
            <Picker.Item label="Titik pendakian 2" value="Titik pendakian 2" />
            <Picker.Item label="Titik pendakian 3" value="Titik pendakian 3" />
          </Picker>
        </View>
        <TouchableOpacity
          className="w-full bg-soil rounded-xl h-12 flex items-center justify-center"
          onPress={handlePress}>
          <Text className="text-ivory font-bold">Cari tour guide</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSearch;
