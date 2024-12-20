import { View, Text, StatusBar, Animated, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import MinimizeCard from '../../../components/miniComponent/MinimizeCard'
import DetailHikers from '../../../components/transaksiCustomer/DetailHikers'
import FixedHarga from '../../../components/bookingTourGuide/FixedHarga'
import CatatanUntukTourGuide from '../../../components/miniComponent/CatatanUntukTourGuide'
import { ScrollView } from 'react-native';
import moment from 'moment'
import CustomToastWarning from '../../../components/miniComponent/CustomToastWarning'
import DetailPemesanCard from '../../../components/transaksiTourGuide/DetailPemesanCard'
import TipsMeetingWithHikers from '../../../components/transaksiTourGuide/TipsMeetingWithHikers'
import CustomButton from '../../../components/miniComponent/CustomButton'
import { router, useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionHistoryByTransactionId } from '../../../redux/transactionSlice'

const TransactionOnGoingApproveScreen = () => {
    const {id} = useLocalSearchParams()
    const dispatch = useDispatch()

    const transactionHistoryDetail = useSelector((state) => state.transaction.transactionHistoryDetail)
    const statusTransactionHistoryDetail = useSelector((state) => state.transaction.status)
    const errorTransactionHistoryDetail = useSelector((state) => state.transaction.error)

    const [loading, setLoading] = useState(true);
    const fadeAnim = useState(new Animated.Value(0))[0]; 

    useEffect(() => {
        if(id) {
            dispatch(getTransactionHistoryByTransactionId(id))
            // console.log(transactionHistoryDetail)
        }
        const loadingTimeout = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(loadingTimeout)
    }, [dispatch, id])

    useEffect(() => {
        if (!loading && statusTransactionHistoryDetail === "succeed") {
                Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [loading, statusTransactionHistoryDetail]);

    const startDate = new Date()
    // const endDate = new Date("2024-11-03T18:55:00")

    // const dummy = moment(new Date()).format('DD MMM YYYY')

    const formattedDate = (date) => {
        return moment(date).format('DD MMM YYYY')
    }

    if (loading || statusTransactionHistoryDetail === "loading") {
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <Image
                    source={require("../../../assets/loading.gif")}
                    style={{ width: 80, height: 80 }}
                />
            </View>
        );
    }

    const continueHandling = () => {
        router.push(`/transaction-tourguide/transBeriPersetujuan?id=${id}`)
    }

    const calculateTimeDifference = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
      
        const diffMs = end - start;

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      
        let result = '';
        if (days > 0) result += `${days} hari `;
        if (hours > 0) result += `${hours} jam `;
        if (minutes > 0) result += `${minutes} menit`;
      
        return result.trim();
    }

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <SafeAreaView className="flex-1">
                <StatusBar barStyle="light-content" backgroundColor="#503A3A" />

                <View className="flex-1">
                    <View className="bg-soil pb-7 rounded-b-verylarge mb-5">
                        <HeaderSubMenu title={"Detail Transaksi"} />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} className="gap-6" contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}>
                        <View className="px-6">
                            <CustomToastWarning 
                                message={"Segera beri tanggapanmu"}
                            />
                        </View>

                        <View className="px-6 mt-6">
                            <MinimizeCard 
                                title={"Sisa Waktu Pemberian Tanggapan"}
                                data={calculateTimeDifference(startDate, transactionHistoryDetail.endOfApprove)}
                                icon={'clock'}
                            />
                        </View>

                        <View className="px-6 mt-6">
                            <MinimizeCard 
                                title={"Tanggal Pendakian"}
                                data={`${formattedDate(transactionHistoryDetail.startDate)} s/d ${formattedDate(transactionHistoryDetail.endDate)}`}
                                icon={'mountain-sun'}
                            />
                        </View>

                        <View className="px-6 mt-6">
                            <DetailPemesanCard 
                                customerName={transactionHistoryDetail.customerName}
                                orderId={transactionHistoryDetail.id}
                                mountainName={transactionHistoryDetail.mountainName}
                                hikingPointName={transactionHistoryDetail.hikingPointName}
                                customerImage={transactionHistoryDetail.customerImage}
                            />
                        </View>

                        <View className="px-6 mt-6">
                            <DetailHikers data={transactionHistoryDetail.hikers} isTourGuide={true} />
                        </View>

                        <View className="mt-6 gap-5">
                            <Text className="font-ibold text-soil ml-6">Detail Harga</Text>
                            <FixedHarga 
                                days={transactionHistoryDetail.days}
                                tourGuidePriceEachDay={transactionHistoryDetail.tourGuidePerDay}
                                tourGuidePriceTotal={transactionHistoryDetail.totalPriceTourGuide}
                                entranceFeeEachDay={transactionHistoryDetail.entryPerDay}
                                entranceFeeTotal={transactionHistoryDetail.totalEntry}
                                simaksiPriceEachPerson={transactionHistoryDetail.priceSimaksi}
                                simaksiPriceTotal={transactionHistoryDetail.totalPriceSimaksi}
                                additionalTourGuidePricePerDayPerPerson={transactionHistoryDetail.additionalPerDay}
                                totalAdditionalTourGuidePricePerDayPerPerson={transactionHistoryDetail.totalPriceAdditional}
                                porterPricePerDayPerPerson={transactionHistoryDetail.porterPerDay}
                                porterCount={transactionHistoryDetail.porter}
                                porterPriceTotal={transactionHistoryDetail.totalPricePorter}
                                adminCost={transactionHistoryDetail.adminCost}
                                totalPrice={transactionHistoryDetail.totalPrice}
                                hikersCount={transactionHistoryDetail.hikers ? transactionHistoryDetail.hikers.length : 0}
                                isTourGuide={true}
                            />
                        </View>

                        <View className="mt-6">
                            <CatatanUntukTourGuide 
                                isEditable={false}
                                title={"Catatan dari calon pendaki"}
                                catatan={transactionHistoryDetail.customerNote}
                            />
                        </View>

                        <View className="mt-6">
                            <TipsMeetingWithHikers />
                        </View>
                    </ScrollView>

                    <View className="w-full flex-row justify-between bg-white px-6 py-3">
                        <CustomButton
                            buttonHandling={continueHandling}
                            customStyle="bg-soil w-full"
                            title="Beri Tanggapan"
                        />
                    </View>
                    
                </View>
            </SafeAreaView>
        </Animated.View>
    )
}

export default TransactionOnGoingApproveScreen