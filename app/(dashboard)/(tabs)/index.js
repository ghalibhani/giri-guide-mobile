import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionHeader from "../../../components/transaksiCustomer/TransactionHeader";
import TransactionStatusBar from "../../../components/transaksiCustomer/TransactionStatusBar";
import TransactionBerlangsung from "../../../components/transaksiCustomer/TransaksiBerlangsung";
import TransaksiSelesai from "../../../components/transaksiCustomer/TransaksiSelesai";

// transTourGuide.js ada di folder transaction-tourguide

const transTourGuide = () => {
  const customerData = [
    {
      id: "1",
      guideName: "Johan",
      mountainName: "Gunung Bromo",
      hikingPoint: "Pos Paltuding",
      numHikers: 3,
      numPorters: 2,
      numDays: 2,
      dateRange: "05-06-2023 s/d 07-06-2023",
      price: "2.500.000",
      status: "UPCOMING",
      role: "customer",
      imageUrl:
        "https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg",
    },
    {
      id: "2",
      guideName: "Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 4,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.000.000",
      status: "WAITING_APPROVE",
      role: "customer",
      imageUrl:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      id: "3",
      guideName: "Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 4,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.000.000",
      status: "REJECT",
      role: "customer",
      imageUrl:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      id: "4",
      guideName: "Customer Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 4,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.000.000",
      status: "DONE",
      role: "customer",
      imageUrl:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
    {
      id: "5",
      guideName: "Customer Siti",
      mountainName: "Gunung Semeru",
      hikingPoint: "Pos Ranu Pane",
      numHikers: 4,
      numPorters: 3,
      numDays: 3,
      dateRange: "10-06-2023 s/d 12-06-2023",
      price: "3.000.000",
      status: "WAITING_PAY",
      role: "customer",
      imageUrl:
        "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    },
  ];

  const loginRole = "tourguide";

  const [show, setShow] = useState("berlangsung");

  const selesai = ["DONE", "REJECT"];
  const berlangsung = ["UPCOMING", "WAITING_PAY", "WAITING_APPROVE"];

  const filteredData = customerData.filter((hiker) => {
    if (show === "berlangsung") {
      return berlangsung.includes(hiker.status);
    } else {
      return selesai.includes(hiker.status);
    }
  });

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='gap-5'>
          <TransactionHeader titleHeader={"Daftar Transaksi"} />
          <TransactionStatusBar onStatusChange={setShow} />
          {show === "berlangsung" ? (
            <TransactionBerlangsung
              customerData={filteredData}
              role={"customer"}
              loginRole={loginRole}
            />
          ) : (
            <TransaksiSelesai tourGuideData={filteredData} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default transTourGuide;
