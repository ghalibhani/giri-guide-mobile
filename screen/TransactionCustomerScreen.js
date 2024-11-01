import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TransaksiBerlangsung from '../components/transaksiCustomer/TransaksiBerlangsung'

const TransactionCustomerScreen = () => {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar
                backgroundColor={"#503A3A"}
                barStyle={"light-content"} 
            />
            <View className="bg-grayCustom flex-1 gap-6">
                <View className="gap-5">
                    <View className="bg-soil rounded-b-verylarge py-6 px-6 pt-11">
                        <Text className="font-ibold text-xl text-ivory">Daftar Transaksi</Text>
                    </View>

                    <View className="bg-white rounded-verylarge py-5 px-6 gap-5">
                        <View className="flex-row">
                            <Text className="font-ibold text-sm text-center text-soil w-1/2">Berlangsung</Text>
                            <Text className="font-iregular text-sm text-center text-soil w-1/2">Selesai</Text>
                        </View>
                        <View>
                            <View className="h-[1] bg-borderCustom"></View>
                            <View className="h-[4] rounded-xl w-1/2 bg-soil"></View>
                        </View>
                    </View>

                    <TransaksiBerlangsung />
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default TransactionCustomerScreen

const styles = StyleSheet.create({})