import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import MinimizeCard from '../../../components/miniComponent/MinimizeCard'
import DetailHikers from '../../../components/transaksiCustomer/DetailHikers'
import FixedHarga from '../../../components/bookingTourGuide/FixedHarga'
import CatatanUntukTourGuide from '../../../components/miniComponent/CatatanUntukTourGuide'
import { ScrollView } from 'react-native';
import moment from 'moment'
import TipsMeetingWithHikers from '../../../components/transaksiTourGuide/TipsMeetingWithHikers'
import DetailPemesanCard from '../../../components/transaksiTourGuide/DetailPemesanCard'
import RatingDariPendaki from '../../../components/transaksiTourGuide/RatingDariPendaki'
import CustomToastInfo from '../../../components/miniComponent/CustomToastInfo'

const TransactionDoneSuccessScreen = ({transDetail}) => {
  const dummy = moment(new Date()).format('DD MMM YYYY')
  const rating = 0
  const review = "Ini tour guide bagus"

  return (
      <SafeAreaView className="flex-1">
          <StatusBar barStyle="light-content" backgroundColor="#503A3A" />

          <View className="flex-1">
              <View className="bg-soil pb-7 rounded-b-verylarge mb-5">
                  <HeaderSubMenu title={"Detail Transaksi"} />
              </View>

              <ScrollView showsVerticalScrollIndicator={false} className="gap-6" contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}>
                  <View className="">
                    {rating ? (
                        <RatingDariPendaki rating={rating} review={review}/>
                    ) : (
                        <CustomToastInfo message={"Belum ada ulasan dari pendaki"} />
                    )}
                    
                  </View>
                  <View className="px-6 mt-6">
                      <MinimizeCard 
                          title={"Tanggal Pendakian"}
                          data={`${dummy} s/d ${dummy}`}
                          icon={'mountain-sun'}
                      />
                  </View>

                  <View className="px-6 mt-6">
                      <DetailPemesanCard />
                  </View>

                  <View className="px-6 mt-6">
                      <DetailHikers isTourGuide={true} />
                  </View>

                  <View className="mt-6 gap-5">
                      <Text className="font-ibold text-soil ml-6">Detail Harga</Text>
                      <FixedHarga />
                  </View>

                  <View className="mt-6">
                      <CatatanUntukTourGuide 
                          isEditable={false}
                          title={"Catatan dari pendaki"}
                      />
                  </View>

                  <View className="mt-6">
                      <TipsMeetingWithHikers />
                  </View>
              </ScrollView>

          </View>
      </SafeAreaView>
  )
}

export default TransactionDoneSuccessScreen