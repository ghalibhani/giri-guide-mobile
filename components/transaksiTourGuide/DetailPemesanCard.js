import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailPemesanCard = ({customer, orderId, mountain, hikingPoint}) => {
  return (
    <View className="gap-5">
        <Text className="font-ibold text-soil">Detail Gunung dan Pemesan</Text>
        <View className="bg-white rounded-[12px] px-6 py-6 gap-6">

            <View className="flex-row gap-5 items-center">
                <Image 
                    source={require("../../assets/profile-image.jpg")}
                    className="w-16 rounded-xl h-16"
                />
                <View className="gap-2">
                    <Text className="color-thistle text-xs font-iregular">Nama Pemesan</Text>
                    <Text className="color-soil text-sm font-ibold">Nama Pemesan</Text>
                </View>
            </View>

            <View className="gap-2">
                <Text className="color-thistle text-xs font-iregular">Kode Pemesanan</Text>
                <Text className="color-soil text-sm font-ibold">Kode Pemesanan</Text>
            </View>

            <View className="gap-2">
                <Text className="color-thistle text-xs font-iregular">Gunung - Titik Pendakian</Text>
                <Text className="color-soil text-sm font-ibold">Gunung - Titik Pendakian</Text>
            </View>
        </View>
    </View>
  )
}

export default DetailPemesanCard

const styles = StyleSheet.create({})