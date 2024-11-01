import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TransaksiBerlangsung from "../../../components/transaksiCustomer/TransaksiBerlangsung";
import TransactionHeader from "../../../components/transaksiCustomer/TransactionHeader";
import TransactionStatusBar from "../../../components/transaksiCustomer/TransactionStatusBar";
import CustomButton from "../../../components/miniComponent/CustomButton";
import TourGuideCard from "../../../components/transaksiCustomer/TourGuideCard";

//  transCustomer.js ada di folder transaction

const TransactionCustomerScreen = () => {
  const tourGuideData = [
    {
      id: "1",
      guideName: "Budi",
      mountainName: "Gunung Bromo",
      hikingPoint: "Pos Paltuding",
      numHikers: 3,
      numPorters: 2,
      numDays: 2,
      dateRange: "05-06-2023 s/d 07-06-2023",
      price: "2.500.000",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: "2",
      guideName: "Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 5,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.200.000",
    },
    {
      id: "3",
      guideName: "Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 5,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.200.000",
    },
    {
      id: "4",
      guideName: "Budi",
      mountainName: "Gunung Bromo",
      hikingPoint: "Pos Paltuding",
      numHikers: 3,
      numPorters: 2,
      numDays: 2,
      dateRange: "05-06-2023 s/d 07-06-2023",
      price: "2.500.000",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='gap-5'>
          <TransactionHeader titleHeader='Daftar Transaksi' />
          <TransactionStatusBar />
          <TransaksiBerlangsung />

          <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
            {tourGuideData.map((tourGuide) => (
              <TourGuideCard
                key={tourGuide.id}
                guideName={tourGuide.guideName}
                mountainName={tourGuide.mountainName}
                hikingPoint={tourGuide.hikingPoint}
                numHikers={tourGuide.numHikers}
                numPorters={tourGuide.numPorters}
                numDays={tourGuide.numDays}
                dateRange={tourGuide.dateRange}
                price={tourGuide.price}
                imageUrl={tourGuide.imageUrl}
                onPressDetail={() =>
                  console.log(`Lihat detail ${tourGuide.guideName}`)
                }
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionCustomerScreen;
