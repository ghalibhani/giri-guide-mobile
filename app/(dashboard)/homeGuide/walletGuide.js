import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import CustomButton from '../../../components/miniComponent/CustomButton'
import { router } from 'expo-router'

const WalletGuideScreen = () => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(value)
    }

    const withdrawHandling = () => 
        router.push({
            pathname: '/homeGuide/withdrawGuide',
            params: { maxAmount: 100000 }
        });
    

    const [isOpen, setIsOpen] = useState('')
    const withdrawHistoryData = [
        {
            id: "1",
            messageWithdraw: "Pendakian 07/08/2024",
            status: "PLUS",
            amount: 12000000
        },
        {
            id: "2",
            messageWithdraw: "Pendakian 07/08/2024",
            status: "PLUS",
            amount: 12000000
        },
        {
            id: "3",
            messageWithdraw: "Pendakian 07/08/2024",
            status: "PLUS",
            amount: 12000000
        },
        {
            id: "4",
            messageWithdraw: "Penarikan 07/08/2024 15:17",
            status: "MINUS",
            amount: 140012412
        },
        {
            id: "5",
            messageWithdraw: "Penarikan 07/08/2024 15:17",
            status: "MINUS",
            amount: 140012412
        },
        {
            id: "6",
            messageWithdraw: "Penarikan ditolak admin karena ....... 07/08/2024 15:17",
            status: "FAILED",
            amount: 140012412
        },
        {
            id: "7",
            messageWithdraw: "Penarikan ditolak admin karena ....... 07/08/2024 15:17",
            status: "FAILED",
            amount: 1233252353
        },
        {
            id: "8",
            messageWithdraw: "Penarikan 07/08/2024 15:17",
            status: "MINUS",
            amount: 140012412
        },
        {
            id: "9",
            messageWithdraw: "Pendakian 07/08/2024",
            status: "PLUS",
            amount: 140012412
        },
        
    ]

    const DetailTransItem = ({item}) => {
        return (
            <View className="gap-5" key={item.id}>
                {item.status !== "FAILED" &&
                    <View className="flex-row justify-between">
                        <Text className="font-iregular text-sm text-soil max-w-3/5 flex-shrink">{item.messageWithdraw}</Text>
                        

                        {item.status === "PLUS" ? (
                            <Text className="font-ibold text-sm text-successHover">+ {formatCurrency(item.amount)}</Text>
                        ) : (
                            <Text className="font-ibold text-sm text-errorHover">- {formatCurrency(item.amount)}</Text>
                        )}
                    </View>
                }

                {item.status === "FAILED" &&
                    <View className="flex-row justify-between">
                        <Text className="font-iregular text-sm text-thistle  max-w-3/5 flex-shrink">{item.messageWithdraw}</Text>
                        <Text className="font-ibold text-sm text-thistle">{formatCurrency(item.amount)}</Text>
                    </View>
                }

                <View className="h-[0.3] bg-thistle"></View>
            </View>
        )
    }

    return (
        <SafeAreaView className=' flex-1'>
            <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
            <View className="flex-1 bg-grayCustom gap-6">
                <View className='bg-soil pt-10 pb-7 rounded-b-verylarge mb-5'>
                    <HeaderSubMenu title={'Dompet'} />
                </View>

                <View className="py-6 gap-7 rounded-verylarge bg-white mx-6">
                    <View className="gap-2 px-6 ">
                        <Text className="font-iregular text-sm text-thistle">Total Balance</Text>
                        <Text className="font-ibold text-3xl text-evergreen">{formatCurrency(10000000)}</Text>
                    </View>

                    <View className="flex-row items-center px-6">
                        <CustomButton 
                            buttonHandling={withdrawHandling}
                            customStyle="bg-soil pl-5 pr-4"
                            title="Tarik uang"
                            iconName="chevron-forward"
                        />
                    </View>
                </View>

                <View className="rounded-t-verylarge px-6 py-5 bg-white flex-1 gap-5">

                    <View className=" mx-auto items-center justify-center bg-thistle rounded-verylarge w-10 h-1"></View>
                    <View className="gap-5">
                        <View className="flex items-center justify-center">
                            <Text className="text-xl font-ibold text-soil">History</Text>
                        </View>

                        <View className="h-[0.3] bg-thistle"></View>
                    </View>
                    <ScrollView>
                        <View className="gap-5">
                            {withdrawHistoryData.map((withdraw) =>
                                <DetailTransItem item={withdraw} key={withdraw.id}/>
                            )}
                        </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
    
}

export default WalletGuideScreen