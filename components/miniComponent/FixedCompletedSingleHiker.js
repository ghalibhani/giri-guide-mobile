import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'

const FixedCompletedSingleHiker = ({data, isTourGuide}) => {
    const formattedDate = (date) => {
        return moment(date).format('DD/MM/YYYY')
    }
    return (
        <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5">
            <View className="flex-row items-center gap-[15] ">
                <Ionicons name="person" color={"#ECD768"} size={20} />
                <View className="gap-[5]">
                    {!isTourGuide && <Text className="font-iregular text-sm text-thistle">NIK - {data.nik}</Text>}
                    <Text className="font-imedium text-base color-soil">{data.fullName}</Text>
                    <Text className="font-iregular text-sm text-thistle">Tanggal Lahir - {formattedDate(data.birthDate)}</Text>
                </View>
            </View>
        </View>
    )
}

export default FixedCompletedSingleHiker

const styles = StyleSheet.create({})