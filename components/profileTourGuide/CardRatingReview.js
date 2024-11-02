import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const CardRatingReview = ({data}) => {
    return (
        <View className='bg-white rounded-verylarge my-4 p-6'>
            <Text className='text-lg text-soil font-ibold'>
            Rating dan Ulasan
            </Text>

            <View className='flex flex-row gap-6 items-center mt-4'>
                <Text className='text-5xl font-isemibold text-evergreen'>4,5</Text>
                
                <View>
                    <View className='flex flex-row gap-2 mb-2'>
                        <Ionicons name='star-outline' size={22} color='black' />
                        <Ionicons name='star-outline' size={22} color='black' />
                        <Ionicons name='star-outline' size={22} color='black' />
                        <Ionicons name='star-outline' size={22} color='black' />
                        <Ionicons name='star-outline' size={22} color='black' />
                    </View>

                    <Text className='text-evergreen text-sm font-iregular'>
                    26 Ulasan
                    </Text>
                </View>
            </View>

            <View className='flex flex-row items-center gap-5 mt-6'>
                <Image
                    className='w-10 h-10 rounded-full'
                    source={require("../../assets/profile-image.jpg")}
                />
                
                <View>
                    <Text className='text-soil text-sm font-ibold mb-1'>
                    Nama reviewer
                    </Text>
                    <Text className='text-evergreen opacity-80 text-sm font-isemibold'>
                    19 Okt 2024
                    </Text>
                </View>
            </View>

            <Text className='text-evergreen font-iregular text-sm mt-5'>
            Tour guide akan memandu Anda di titik pendakian pilihan, memberikan
            rute yang aman dan tips mendaki. Nikmati pengalaman mendaki yang
            menyenangkan, lengkap dengan informasi seputar jalur, alam, dan
            keunikan lokasi. INI MAKSIMAL 150 KARAKTER
            </Text>

            <View className='bg-borderCustom h-[1] my-5'></View>

            <TouchableOpacity>
                <Text className='text-evergreen font-isemibold text-sm text-right'>
                    Lihat Selengkapnya
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default CardRatingReview