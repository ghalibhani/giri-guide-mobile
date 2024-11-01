import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import MinimizeCard from '../../../components/miniComponent/MinimizeCard'
import DetailTourGuideGunungCard from '../../../components/transaksiCustomer/DetailTourGuideGunungCard'
import DetailHikers from '../../../components/transaksiCustomer/DetailHikers'
import FixedHarga from '../../../components/bookingTourGuide/FixedHarga'
import CatatanUntukTourGuide from '../../../components/miniComponent/CatatanUntukTourGuide'
import TipsMeetingWithGuide from '../../../components/transaksiCustomer/TipsMeetingWithGuide'
import { ScrollView } from 'react-native';
import moment from 'moment'
import CustomButton from '../../../components/miniComponent/CustomButton'

const transDoneSuccess = ({transDetail}) => {
  const dummy = moment(new Date()).format('DD MMM YYYY')

  const continueHandling = () => {

  } 

  return (
      <SafeAreaView className="flex-1">
          <StatusBar barStyle="light-content" backgroundColor="#503A3A" />

          <View className="flex-1">
              <View className="bg-soil pb-7 rounded-b-verylarge mb-5">
                  <HeaderSubMenu title={"Detail Transaksi"} />
              </View>

              <ScrollView showsVerticalScrollIndicator={false} className="gap-6" contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}>
                  <View className="px-6">
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

              <View className="w-full flex-row justify-between bg-white px-6 py-3">
                  <CustomButton
                      buttonHandling={continueHandling}
                      customStyle="bg-soil flex-1"
                      title="Beri Rating"
                  />
              </View>

          </View>
      </SafeAreaView>
  )
}

export default transDoneSuccess