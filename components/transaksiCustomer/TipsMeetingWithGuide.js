import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'

const TipsMeetingWithGuide = () => {
  return (
    <View className="gap-6 bg-white px-6 py-5 rounded-verylarge">
        <Text className="font-ibold text-soil">Tips Pertemuan dengan Tour Guide</Text>

        <View className="gap-2">
            <Text className="font-isemibold text-evergreen text-sm">Sebelum Pertemuan</Text>
            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome6 name='clock' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Ketahui waktu dan titik pendakian.</Text>
            </View>

            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome name='map-marker' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Rencanakan rute agar tidak terlambat.</Text>
            </View>
        </View>

        <View className="gap-2">
            <Text className="font-isemibold text-evergreen text-sm">Barang yang Harus Dibawa</Text>
            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome name='id-card' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Bawa identitas resmi untuk keperluan identifikasi.</Text>
            </View>

            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome6 name='kit-medical' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Bawa obat-obatan pribadi yang mungkin diperlukan.</Text>
            </View>
        </View>

        <View className="gap-2">
            <Text className="font-isemibold text-evergreen text-sm">Saat Pertemuan</Text>
            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome name='handshake-o' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Perkenalkan diri dan sampaikan kebutuhan khusus.</Text>
            </View>

            <View className="flex-row gap-4 items-center">
                <View className="w-6 items-center">
                    <FontAwesome name='exclamation-triangle' size={20} color={"#ECD768"} />
                </View>
                <Text className="font-iregular text-sm text-evergreen flex-1">Dengarkan instruksi dari pemandu dengan seksama.</Text>
            </View>
        </View>

    </View>
  )
}

export default TipsMeetingWithGuide

const styles = StyleSheet.create({})