import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import FixedDetailCalonPendaki from './FixedDetailCalonPendaki'
import FixedHarga from './FixedHarga'
import CustomButton from '../miniComponent/CustomButton'
import CatatanUntukTourGuide from '../miniComponent/CatatanUntukTourGuide'

const ReviewPembayaran = ({
    continueHandling, 
    isEditable, 
    hikerDetails,  
    catatan, 
    setCatatan,
    days,
    tourGuidePriceEachDay,
    tourGuidePriceTotal,
    entranceFeeEachDay,
    entranceFeeTotal,
    simaksiPriceEachPerson,
    simaksiPriceTotal,
    additionalTourGuidePricePerDayPerPerson,
    totalAdditionalTourGuidePricePerDayPerPerson,
    porterPricePerDayPerPerson,
    porterCount,
    porterPriceTotal,
    totalPrice,
    adminCost,
    isTourGuide,
    hikersCount,
}) => {
    const isNoteValid = catatan.length >= 20 && catatan.length <= 150;

    useEffect(() => {
        console.log('Catatan Tour Guide:', catatan);
        console.log('Ini tombol kok ga terklik, status', isNoteValid)
      }, [catatan]);

    return (
        <View className="gap-6 py-5">
            <View className="px-6 gap-5">
                <Text className="font-ibold text-soil text-xl text-center">Review Pembayaran</Text>
                
                <View className="h-[1] bg-borderCustom"></View>


                <FixedDetailCalonPendaki detailCalonPendaki={hikerDetails} isTourGuide={isTourGuide}/>
            </View>
            

            <Text className="font-ibold text-soil px-6 ">Detail Harga</Text>

            <FixedHarga 
                days={days}
                tourGuidePriceEachDay={tourGuidePriceEachDay}
                tourGuidePriceTotal={tourGuidePriceTotal}
                entranceFeeEachDay={entranceFeeEachDay}
                entranceFeeTotal={entranceFeeTotal}
                simaksiPriceEachPerson={simaksiPriceEachPerson}
                simaksiPriceTotal={simaksiPriceTotal}
                additionalTourGuidePricePerDayPerPerson={additionalTourGuidePricePerDayPerPerson}
                totalAdditionalTourGuidePricePerDayPerPerson={totalAdditionalTourGuidePricePerDayPerPerson}
                porterPricePerDayPerPerson={porterPricePerDayPerPerson}
                porterCount={porterCount}
                porterPriceTotal={porterPriceTotal}
                adminCost={adminCost}
                totalPrice={totalPrice}
                hikersCount={hikersCount}
            />

            <CatatanUntukTourGuide 
                isEditable={isEditable}
                catatan={catatan}
                setCatatan={setCatatan}
                title={"Beri catatan ke tour guide"}
                required={true}
            />

            <View className="px-6">
                <CustomButton
                    buttonHandling={continueHandling}
                    customStyle={`min-w-full ${isNoteValid ? "bg-soil" : "bg-gray-300"}`}
                    title="Ajukan Pendakian ke Tour Guide"
                    isDisabled={!isNoteValid}
                />
            </View>

        </View>
    )
}

export default ReviewPembayaran