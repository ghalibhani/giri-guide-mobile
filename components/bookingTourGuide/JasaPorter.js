import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import CustomButton from '../miniComponent/CustomButton';
import moment from 'moment';

const JasaPorter = ({continueHandling, maxPorter, eachPorterPrice, countPorter, tourGuidePriceEachDay, additionalPriceEachDayEachHiker, setCountPorter, fixedHikerCount, totalPrice, setTotalPrice, totalDays, startDate, endDate}) => {
    const [maxPorterErrorMessage, setMaxPorterErrorMessage] = useState('')
    const [porterPrice, setPorterPrice] = useState(0)

    // console.log(totalPrice)

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency', 
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value)
    }

    const formattedDate = (date) => {
        return moment(date).format('DD MMM YYYY')
    }

    const increment = () => {
        if(countPorter < maxPorter){
            const newCount = countPorter + 1
            setCountPorter(newCount)
            setMaxPorterErrorMessage('')
            setPorterPrice(eachPorterPrice * newCount * totalDays)
            setTotalPrice(totalPrice + eachPorterPrice * totalDays)
        } else{
            setMaxPorterErrorMessage(`Tour guide ini hanya menyediakan maksimal ${maxPorter} porter`)
        }
    }

    const decrement = () => {
        if(countPorter > 0) {
            const newCount = countPorter - 1
            setCountPorter(newCount)
            setMaxPorterErrorMessage('')
            setPorterPrice(eachPorterPrice * newCount * totalDays)
            setTotalPrice(totalPrice - eachPorterPrice * totalDays)
        }
    }

    return (
        <View className="flex-col justify-around">
            <View className="gap-5 mb-24 px-6 pt-5">
                <Text className="font-ibold text-soil">Jasa Porter</Text>

                <View className="rounded-verylarge bg-ivory px-6 py-5">
                    <Text className="font-iregular text-sm text-soil">Satu orang porter hanya mampu mengangkat beban maksimal 25 kg.</Text>
                </View>

                <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-[15] ">
                            <MaterialIcons name="hiking" color={"#ECD768"} size={20} />
                            <View className="gap-[5]">
                                <Text className="font-iregular text-sm text-thistle">Jumlah Porter</Text>
                                <Text className="font-imedium text-base color-evergreen">{countPorter}</Text>
                            </View>
                        </View>

                        <View className="flex-row items-center gap-5">
                            <TouchableOpacity onPress={() => decrement()} className="w-[45px] align-middle justify-center border-2 border-evergreen px-4 py-2 rounded-full">
                                <Text className="font-ibold text-lg ml-[1] text-evergreen">-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => increment()} className="w-[45px] align-middle justify-center border-2 border-evergreen px-4 py-2 rounded-full">
                                <Text className="font-ibold text-lg text-evergreen">+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {maxPorterErrorMessage && (
                        <View className="px-5">
                            <Text className="text-errorHover text-sm font-iregular">{maxPorterErrorMessage}</Text>
                        </View>
                    )}
                </View>


                <View className="gap-3">
                    <View className="flex-row justify-between">
                        <Text className="font-iregular text-thistle text-sm">Jasa per porter per hari</Text>
                        <Text className="font-iregular text-soil text-sm">{formatCurrency(eachPorterPrice)}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="font-ibold text-evergreen text-sm max-w-[80%]">Total harga porter untuk {totalDays} hari {'\n'}
                            <Text className="font-iregular">{formattedDate(startDate)} s/d {formattedDate(endDate)}</Text>
                        </Text>
                        <Text className="font-ibold text-evergreen text-sm">{formatCurrency(porterPrice)}</Text>
                    </View>
                </View>
            </View>
            <View className="w-full absolute bottom-0 flex-row justify-between bg-white px-6 py-3">
                <View className="flex-col gap-1">
                    <Text className="font-iregular text-thistle text-sm">Total</Text>
                    <Text className="font-ibold text-soil text-lg">{formatCurrency(totalPrice)}</Text>
                </View>
                <CustomButton
                    buttonHandling={continueHandling}
                    customStyle="bg-soil w-40"
                    title="Lanjutkan"
                />
            </View>
        </View>
    )
}

export default JasaPorter