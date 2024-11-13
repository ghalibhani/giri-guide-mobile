import { View, Text } from 'react-native'
import React from 'react'

const FixedHarga = ({
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

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };
    // console.log(hikersCount)

    return (
        <View className="gap-[15] bg-white px-6 py-6 rounded-verylarge">
            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Jasa tour guide {days} hari max. 5 pendaki </Text>
                    <Text className="font-iregular text-thistle text-sm">(1 hari = {formatCurrency(tourGuidePriceEachDay)})</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(tourGuidePriceTotal)}</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Uang masuk gunung {days} hari {hikersCount} pendaki </Text>
                    <Text className="font-iregular text-thistle text-sm">(1 hari 1 pendaki = {formatCurrency(entranceFeeEachDay)})</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(entranceFeeTotal)}</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Pengurusan SIMAKSI</Text>
                    <Text className="font-iregular text-thistle text-sm">(1 pendaki = {formatCurrency(simaksiPriceEachPerson)})</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(simaksiPriceTotal)}</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Jasa tour guide untuk penambahan orang</Text>
                    <Text className="font-iregular text-thistle text-sm">(1 pendaki 1 hari = {formatCurrency(additionalTourGuidePricePerDayPerPerson)})</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(totalAdditionalTourGuidePricePerDayPerPerson)}</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Jasa porter {days} hari {porterCount} porter </Text>
                    <Text className="font-iregular text-thistle text-sm">(1 porter 1 hari = {formatCurrency(porterPricePerDayPerPerson)})</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(porterPriceTotal)}</Text>
            </View>

            <View className="flex-row justify-between items-center">
                <View className="max-w-[70%]">
                    <Text className="font-iregular text-thistle text-sm">Biaya layanan aplikasi {isTourGuide && ("(ditujukan untuk customer)")}</Text>
                </View>
                
                <Text className="font-iregular text-soil text-sm">{formatCurrency(adminCost)}</Text>
            </View>
            

            <View className="h-[1] bg-borderCustom"></View>

            <View className="flex-row justify-between">
                <Text className="font-ibold text-evergreen text-sm">Total</Text>
                <Text className="font-ibold text-evergreen text-sm">{formatCurrency(totalPrice)}</Text>
            </View>
        </View>
    )
}

export default FixedHarga