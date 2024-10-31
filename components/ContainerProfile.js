import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

const imageUrl = "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380";
const profileUrl = "https://img.freepik.com/free-photo/portrait-volunteer-who-organized-donations-charity_23-2149230567.jpg?t=st=1730346064~exp=1730349664~hmac=cbb7f5766546308cb4968873a8e5c98132b14f1d7383ef959fa87b8c9f332233&w=740"
export default function ContainerProfile() {
	return (
		<View className='bg-white h-[367] w-full items-center rounded-b-[30]'>
			<Image source={{uri: imageUrl}} className='h-[200] w-full rounded-b-[30]' resizeMode="cover"/>
			<Image source={{uri: profileUrl}} className='w-[150] h-[150] rounded-full mt-[-75]'/>
			<TouchableOpacity className='w-[40] h-[40] rounded-full bg-daisy items-center justify-center border-[2px] border-white mt-[-40] mr-[-90]'>
				<Feather name="edit-2" size={18} color="black" />
			</TouchableOpacity>
			<Text className='mt-[10px] text-thistle text-[12px] font-light'>Email</Text>
			<Text className='mt-[8px] text-evergreen text-[14px] font-bold'>Full Name</Text>
			<Text className='mt-[8px] text-thistle text-[12px] font-light'>Bergabung pada Januari 2025</Text>
		</View>
	)
}