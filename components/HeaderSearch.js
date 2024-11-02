import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

const HeaderSearch = () => {
  const [mountain, setMountain] = useState("");
  const [positionOfInterest, setPositionOfInterest] = useState("");

  const handlePress = () => {
    if (mountain && positionOfInterest) {
      router.navigate("/search/searchList");
    } else {
      Alert.alert("Dibutuhkan", "Isi semua kolom untuk pencarian");
    }
  };
  return (
    <View>
      <Image
        source={require("../assets/gunung-tour-guide.jpg")}
        className="w-full h-[320px] rounded-b-[30px]"
      />
      <View className="flex flex-col justify-center items-center relative top-[-300px]">
        <TouchableOpacity className="w-[30]  h-[30] rounded-full bg-white border-[1px] border-soil justify-center items-center absolute left-3">
          <Ionicons
            name="chevron-back"
            size={15}
            color="#503A3A"
            onPress={() => router.back()}
          />
        </TouchableOpacity>

        <Text className="text-[20px] font-bold text-ivory">
          Pencarian tour guide
        </Text>
      </View>

      <View className="p-4 bg-white rounded-xl mt-[-210px] mx-4">
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
