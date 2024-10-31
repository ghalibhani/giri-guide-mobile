import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import CustomButton from '../miniComponent/CustomButton';

const JasaPorter = ({continueHandling}) => {
    const [count, setCount] = useState(0);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(value)
    }

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
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
                                <Text className="font-imedium text-base color-evergreen">{count}</Text>
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
                </View>

                <View className="gap-3">
                    <View className="flex-row justify-between">
                        <Text className="font-iregular text-thistle text-sm">Jasa per porter</Text>
                        <Text className="font-iregular text-soil text-sm">Rp 100.000</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="font-ibold text-evergreen text-sm">Total</Text>
                        <Text className="font-ibold text-evergreen text-sm">Rp 20.000</Text>
                    </View>
                </View>
            </View>
            <View className="w-full absolute bottom-0 flex-row justify-between bg-white px-6 py-3">
                <View className="flex-col gap-1">
                    <Text className="font-iregular text-thistle text-sm">Total</Text>
                    <Text className="font-ibold text-soil text-lg">Rp 20.000</Text>
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