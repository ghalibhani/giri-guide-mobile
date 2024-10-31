import { Text, View } from "react-native";

export default function ProfileInfo({label, value}) {
	return(
		<View className='bg-white rounded-[12] w-full h-24 items-start justify-center px-5 py-3'>
			<Text className='text-thistle text-md font-light mb-2'>
				{label}
			</Text>
			<Text className='text-evergreen text-lg font-bold'>
				{value}
			</Text>
		</View>
	)
}