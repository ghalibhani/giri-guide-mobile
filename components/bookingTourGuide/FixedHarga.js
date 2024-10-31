import { View, Text } from 'react-native'
import React from 'react'

const FixedHarga = ({detailHarga}) => {
    return (
        <View className="gap-[15] bg-white px-6 py-5 rounded-verylarge">
            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-iregular text-thistle text-sm">Jasa tour guide 2 hari </Text>
                    <Text className="font-iregular text-thistle text-sm">(1 hari = Rp 130.000)</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-iregular text-thistle text-sm">Uang masuk gunung 2 hari</Text>
                    <Text className="font-iregular text-thistle text-sm">(1 hari 1 orang = Rp 130.000)</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-iregular text-thistle text-sm">Pengurusan SIMAKSI</Text>
                    <Text className="font-iregular text-thistle text-sm">(1 orang = Rp 130.000)</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-iregular text-thistle text-sm">Jasa tour guide per penambahan</Text>
                    <Text className="font-iregular text-thistle text-sm">(1 orang 1 hari = Rp 40.000)</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-iregular text-thistle text-sm">Jasa porter 2 hari </Text>
                    <Text className="font-iregular text-thistle text-sm">(1 orang 1 hari = Rp 40.000)</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
            </View>

            <View className="h-[1] bg-borderCustom"></View>

            <View className="flex-row justify-between">
                <Text className="font-ibold text-evergreen text-sm">Total</Text>
                <Text className="font-ibold text-evergreen text-sm">Rp 20.000</Text>
            </View>
        </View>
    )
}

export default FixedHarga