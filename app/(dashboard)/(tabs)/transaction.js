import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TransaksiSlideBerlangsung from "../../../components/transaksiCustomer/TransaksiSlideBerlangsung";
import TransactionHeader from "../../../components/transaksiCustomer/TransactionHeader";
import TransactionStatusBar from "../../../components/transaksiCustomer/TransactionStatusBar";
import CustomButton from "../../../components/miniComponent/CustomButton";
import TourGuideCard from "../../../components/transaksiCustomer/TourGuideCard";
import TransactionBerlangsung from "../../../components/transaksiCustomer/TransaksiBerlangsung";
import TransaksiSelesai from "../../../components/transaksiCustomer/TransaksiSelesai";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransactionsByUserId } from "../../../redux/transactionSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

//  transCustomer.js ada di folder transaction

const TransactionCustomerScreen = () => {
  const dispatch = useDispatch();
  const transactionHistoryLists = useSelector(
    (state) => state.transaction.transactionsHistory
  );
  const [show, setShow] = useState("berlangsung");
  const role = useSelector((state) => state.auth.role);

  console.log(role);

  const selesai = ["DONE", "REJECTED"];
  const berlangsung = ["UPCOMING", "WAITING_PAY", "WAITING_APPROVE"];

  const [loading, setLoading] = useState(true);

  const selesaiString = "done%2Crejected";
  const berlangsungString = "upcoming%2Cwaiting_pay%2Cwaiting_approve";

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        const userRole = await AsyncStorage.getItem("userRole");
        console.log(`ini dari transaction: ${userId}`);
        console.log(`ini role dari transaction: ${userRole}`);
        if (!userId) {
          console.error("User ID not found.");
          return;
        }
        const listStatus =
          show === "berlangsung" ? berlangsungString : selesaiString;
        setLoading(true);
        dispatch(
          getAllTransactionsByUserId({
            userId,
            listStatus,
            userRole,
            page: 1,
            size: 40,
          })
        ).then(() => setLoading(false));
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setLoading(false);
      }
    };
    console.log(show);
    console.log(transactionHistoryLists);
    fetchTransactions();
  }, [dispatch, show]);

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='bg-grayCustom flex-1 gap-6'>
        <View className='gap-5'>
          <TransactionHeader titleHeader='Daftar Transaksi' />
          <TransactionStatusBar onStatusChange={setShow} />

          {loading ? (
            <View
              className='flex-1 items-center bg-grayCustom'
              style={{ marginTop: 200 }}
            >
              <Image
                source={require("../../../assets/loading.gif")}
                style={{ width: 80, height: 80 }}
              />
            </View>
          ) : (
            <>
              {show === "berlangsung" ? (
                <TransactionBerlangsung
                  key={`berlangsung-${Date.now()}`}
                  tourGuideData={transactionHistoryLists}
                  customerData={transactionHistoryLists}
                  role={role}
                />
              ) : (
                <TransaksiSelesai
                  key={`selesai-${Date.now()}`}
                  tourGuideData={transactionHistoryLists}
                  customerData={transactionHistoryLists}
                  role={role}
                />
              )}
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionCustomerScreen;
