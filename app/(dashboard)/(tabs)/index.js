import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TransaksiSlideBerlangsung from "../../../components/transaksiCustomer/TransaksiSlideBerlangsung";
import TransactionHeader from "../../../components/transaksiCustomer/TransactionHeader";
import TransactionStatusBar from "../../../components/transaksiCustomer/TransactionStatusBar";
import CustomButton from "../../../components/miniComponent/CustomButton";
import TourGuideCard from "../../../components/transaksiCustomer/TourGuideCard";
import TransactionBerlangsung from "../../../components/transaksiCustomer/TransaksiBerlangsung";
import TransaksiSelesai from "../../../components/transaksiCustomer/TransaksiSelesai";

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
      status: "ONNEARBY",
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
      status: "ONWAITINGPAY",
      imageUrl:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
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
      status: "ONAPPROVE",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg",
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
      status: "DONEHIKING",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  const [show, setShow] = useState("berlangsung");

  const selesai = ["DONEHIKING", "DONEREJECT"];
  const berlangsung = ["ONNEARBY", "ONWAITINGPAY", "ONAPPROVE"];

  const filteredData = tourGuideData.filter((tourGuide) =>
    show === "berlangsung"
      ? berlangsung.includes(tourGuide.status)
      : selesai.includes(tourGuide.status)
  );

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='gap-5'>
          <TransactionHeader titleHeader='Daftar Transaksi' />
          <TransactionStatusBar onStatusChange={setShow} />
          {show === "berlangsung" ? (
            <TransactionBerlangsung tourGuideData={filteredData} />
          ) : (
            <TransaksiSelesai tourGuideData={filteredData} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionCustomerScreen;
