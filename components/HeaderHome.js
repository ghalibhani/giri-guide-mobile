import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
const HeaderHome = ({ onPress, fullName }) => {
  return (
    <View className='w-screen h-[176px] rounded-br-[30px] rounded-bl-[30px] bg-soil pt-[64px] pb-[24px] px-[24px]'>
      <Text className='text-[20px] font-bold text-ivory mb-5'>
        Hai, {fullName}!
      </Text>
      <View className='relative'>
        <Ionicons
          name='search-outline'
          size={24}
          color='#000'
          className='absolute top-2 left-3 z-50'
        />
        <TouchableOpacity
          className='text-[16px] flex justify-center bg-white h-11 rounded-3xl px-4 pr-3 pl-12'
          onPress={onPress}
        >
          <Text className='text-evergreen font-iregular text-sm'>
            Cari tour guide di sini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
