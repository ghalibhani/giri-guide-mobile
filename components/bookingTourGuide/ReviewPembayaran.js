import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import FixedDetailCalonPendaki from './FixedDetailCalonPendaki'
import FixedHarga from './FixedHarga'
import CustomButton from '../miniComponent/CustomButton'
import CatatanUntukTourGuide from '../miniComponent/CatatanUntukTourGuide'

const ReviewPembayaran = ({continueHandling, isEditable, detailCalonPendaki, detailHarga, catatan, setCatatan}) => {
    return (
        <View className="gap-6 py-5">
            <View className="px-6 gap-5">
                <Text className="font-ibold text-soil text-xl text-center">Review Pembayaran</Text>
                
                <View className="h-[1] bg-borderCustom"></View>

                <Text className="font-ibold text-soil">Detail Calon Pendaki</Text>

                <FixedDetailCalonPendaki detailCalonPendaki={detailCalonPendaki}/>
            </View>
            

            <Text className="font-ibold text-soil px-6 ">Detail Harga</Text>

            <FixedHarga detailHarga={detailHarga}/>

            <CatatanUntukTourGuide 
                isEditable={isEditable}
                catatan={catatan}
                setCatatan={setCatatan}
            />

            <View className="px-6">
                <CustomButton
                    buttonHandling={continueHandling}
                    customStyle="bg-soil min-w-full"
                    title="Ajukan Pendakian ke Tour Guide"
                />
            </View>

        </View>
    )
}

export default ReviewPembayaran