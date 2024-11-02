import { ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import MinimizeCard from '../../../components/miniComponent/MinimizeCard'
import moment from 'moment'
import DetailTourGuideGunungCard from '../../../components/transaksiCustomer/DetailTourGuideGunungCard'
import DetailHikers from '../../../components/transaksiCustomer/DetailHikers'
import FixedHarga from '../../../components/bookingTourGuide/FixedHarga'
import CatatanUntukTourGuide from '../../../components/miniComponent/CatatanUntukTourGuide'
import TipsMeetingWithGuide from '../../../components/transaksiCustomer/TipsMeetingWithGuide'

const TransactionDoneRejectedScreen = ({transDetail}) => {
    const dummy = moment(new Date()).format('DD MMM YYYY')

    return (
        <SafeAreaView>
            <StatusBar barStyle="light-content" backgroundColor="#503A3A" />
            {/* <Link href='/bookGuide/bookThreeStep'>
                <Text className='text-3xl font-bold'>loncat</Text>
                </Link> */}
            <View className="gap-5">
                <View className="bg-soil pb-7 rounded-b-verylarge">
                    <HeaderSubMenu title={"Detail Transaksi"} />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}  className="gap-6" contentContainerStyle={{ paddingBottom: 200 }}>
                    <View>
                        <CatatanUntukTourGuide 
                            isEditable={false}
                            title={"Alasan penolakan oleh tour guide"}
                        />
                    </View>

                    <View className="px-6 mt-6">
                        <MinimizeCard 
                            title={"Tanggal Pendakian"}
                            data={`${dummy} s/d ${dummy}`}
                            icon={'mountain-sun'}
                        />
                    </View>

                    <View className="px-6 mt-6">
                        <DetailTourGuideGunungCard />
                    </View>

                    <View className="px-6 mt-6">
                        <DetailHikers />
                    </View>

                    <View className="mt-6 gap-5">
                        <Text className="font-ibold text-soil ml-6">Detail Harga</Text>
                        <FixedHarga />
                    </View>

                    <View className="mt-6">
                        <CatatanUntukTourGuide 
                            isEditable={false}
                            title={"Catatan kepada tour guide"}
                        />
                    </View>

                    <View className="mt-6">
                        <TipsMeetingWithGuide />
                    </View>
                </ScrollView>
                
            </View>



        </SafeAreaView>
    )
}

export default TransactionDoneRejectedScreen