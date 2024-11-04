import { View, Text, Modal, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../components/miniComponent/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const HomeMainTourGuideScreen = () => {
    const tourGuideName = "Giri Guide Name";
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(value)
    }

    const formattedDate = (date) => {
        return new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(date);
    }

    return (
        <SafeAreaView className='flex-1'>
            <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

            {/* <Link href="transaction-tourguide/transDoneSuccess">Loncat</Link>             */}

            <View className="gap-5 bg-grayCustom flex-1">
                <View className='bg-soil flex-row justify-between rounded-b-verylarge py-6 px-6 pt-6'>
                    <Text className='font-ibold text-xl text-ivory'>Hai, {tourGuideName}</Text>
                    <View className="flex-row gap-5">
                        {/* <TouchableOpacity className="rounded-full bg-white w-8 h-8 items-center justify-center">
                            <Link href={'/homeGuide/onOffMountainAndHikingPoint'}>
                                <Ionicons name='power' color={`${!isTourGuideActive ? "#ED3241" : "#298267"}`} size={18} />
                            </Link>
                        </TouchableOpacity> */}

                        <TouchableOpacity>
                            <Link href={'/homeGuide/walletGuide'}>
                                <Ionicons name='wallet-outline' color={"#FBF6D9"} size={24} />
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 0 }}>
                    <View className="gap-6">
                        <View className="pt-6 gap-7 rounded-verylarge bg-white mx-6">
                            <View className="gap-2 px-6 ">
                                <Text className="font-iregular text-sm text-thistle">Total Balance</Text>
                                <Text className="font-ibold text-3xl text-evergreen">{formatCurrency(10000000)}</Text>
                            </View>

                            <View className="rounded-verylarge bg-daisy px-6 py-5 flex-row justify-between">
                                <View className="gap-[5]">
                                    <Text className="font-iregular text-sm text-soil">Pemasukan</Text>
                                    <Text className="font-ibold text-base text-evergreen">{formatCurrency(10000000)}</Text>
                                </View>

                                <View className="gap-[5]">
                                    <Text className="font-iregular text-sm text-soil">Pengeluaran</Text>
                                    <Text className="font-ibold text-base text-evergreen">{formatCurrency(10000000)}</Text>
                                </View>
                            </View>
                        </View> 

                        <View className="flex-row justify-between gap-4 mx-6">
                            <View className="px-6 py-5 gap-[5] bg-soil rounded-verylarge flex-1">
                                <Text className="font-iregular text-sm text-oat">Pendakian berhasil</Text>
                                <Text className="font-ibold text-base text-ivory">300</Text>
                            </View>

                            <View className="px-6 py-5 gap-[5] bg-soil rounded-verylarge flex-1">
                                <Text className="font-iregular text-sm text-oat">Pendakian ditolak</Text>
                                <Text className="font-ibold text-base text-ivory">200</Text>
                            </View>
                        </View>

                        <View className="rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]">
                            <Text className="font-iregular text-sm text-soil">Jadwal terdekat</Text>
                            <Text className="font-ibold text-base text-evergreen">{formattedDate(new Date())}</Text>
                        </View>

                        <View className="rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]">
                            <Text className="font-iregular text-sm text-soil">Banyak pendakian yang belum selesai </Text>
                            <Text className="font-ibold text-base text-evergreen">100</Text>
                        </View>

                        <View className="rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]">
                            <Text className="font-iregular text-sm text-soil">Banyak pendakian yang belum disetujui </Text>
                            <Text className="font-ibold text-base text-evergreen">100</Text>
                        </View>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
        
    )
}

export default HomeMainTourGuideScreen