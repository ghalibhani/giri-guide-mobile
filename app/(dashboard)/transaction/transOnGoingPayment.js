import { View, Text, StatusBar, Animated, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import MinimizeCard from "../../../components/miniComponent/MinimizeCard";
import DetailTourGuideGunungCard from "../../../components/transaksiCustomer/DetailTourGuideGunungCard";
import DetailHikers from "../../../components/transaksiCustomer/DetailHikers";
import FixedHarga from "../../../components/bookingTourGuide/FixedHarga";
import CatatanUntukTourGuide from "../../../components/miniComponent/CatatanUntukTourGuide";
import TipsMeetingWithGuide from "../../../components/transaksiCustomer/TipsMeetingWithGuide";
import { ScrollView } from "react-native";
import moment from "moment";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import {
  getSnapTokenByTransactionId,
  getTransactionHistoryByTransactionId,
} from "../../../redux/transactionSlice";
import WebView from "react-native-webview";
import { useFocusEffect } from "@react-navigation/native";

const TransactionOnGoingPaymentScreen = () => {
  const { id } = useLocalSearchParams();
  // console.log('ini dari transaction pay customer: transaction id = ', id)
  const dispatch = useDispatch();

  const transactionHistoryDetail = useSelector(
    (state) => state.transaction.transactionHistoryDetail
  );
  const statusTransactionHistoryDetail = useSelector(
    (state) => state.transaction.status
  );
  const errorTransactionHistoryDetail = useSelector(
    (state) => state.transaction.error
  );

  const transactionPayment = useSelector(
    (state) => state.transaction.snapToken
  );
  const statusTransactionPayment = useSelector(
    (state) => state.transaction.status
  );

  const [loading, setLoading] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const [snapToken, setSnapToken] = useState(null);
  // const [redirectUrl, setRedirectUrl] = useState(null)
  const [isWebViewVisible, setWebViewVisible] = useState(false);
  // const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getTransactionHistoryByTransactionId(id));
      // console.log(transactionHistoryDetail.endOfPay)
      // console.log(transactionHistoryDetail.hikers)
    }
    const loadingTimeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (transactionPayment && transactionPayment.paymentResponse?.redirectUrl) {
  //     setSnapToken(transactionPayment); // Set snapToken di sini
  //     setWebViewVisible(true); // Tampilkan WebView jika snapToken sudah tersedia
  //     console.log("Redirect URL:",transactionPayment.paymentResponse.redirectUrl);
  //   }
  // }, [transactionPayment, statusTransactionPayment]);

  // useEffect(() => {
  //   if (transactionPayment?.paymentResponse?.redirectUrl) {
  //     setWebViewVisible(true);
  //   }
  // }, [transactionPayment]);

  useEffect(() => {
    if (!loading && statusTransactionHistoryDetail === "succeed") {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [loading, statusTransactionHistoryDetail]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setSnapToken(null);
      };
    }, [])
  );

  const startDate = new Date();
  const endDate = "2024-10-02T09:12:14";

  const dummy = moment(new Date()).format("DD MMM YYYY");

  // const continueHandling = () =>

  const formattedDate = (date) => {
    return moment(date).format("DD MMM YYYY");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  if (loading || statusTransactionHistoryDetail === "loading") {
    return (
      <View className='flex-1 items-center justify-center bg-white'>
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  const calculateTimeDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffMs = end - start;

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    let result = "";
    if (days > 0) result += `${days} hari `;
    if (hours > 0) result += `${hours} jam `;
    if (minutes > 0) result += `${minutes} menit`;

    return result.trim();
  };

  const continueHandling = async() => {
    try {
      await dispatch(getSnapTokenByTransactionId(id));
      // console.log("Transaction Payment State:", transactionPayment);
      // console.log("Redirect URL:", transactionPayment?.paymentResponse?.redirectUrl);

      setWebViewVisible(true); 
      // if (transactionPayment?.paymentResponse?.redirectUrl) {
      //   setWebViewVisible(true); 
      // }
    } catch (error) {
      console.error("Error saat memproses pembayaran:", error);
    }
  };

  const handleWebViewNavigationStateChange = async (navState) => {
    const exampleUrl = "http://example.com";
    // console.log('handlewebviewnavigationstatechange dapat', navState.url)

    if (navState.url.startsWith(exampleUrl)) {
      // if (navState.url !== exampleUrl) {
      //   console.log('Navigation canceled: already on the correct URL');
      //   return; // Exit the function, no further navigation happens
      // }

      // console.log('ini navstate startswith jalan')
      const response = await dispatch(getSnapTokenByTransactionId(id));
      // console.log('ini response nya dapat nih: di bawah aiwaait dispatch', response.payload?.data?.paymentResponse)
      const paymentStatus =
        response.payload?.data?.paymentResponse?.PaymentStatus;
      // console.log('dapat nih response nya: ', paymentStatus)
      if (paymentStatus === "PAID") {
        router.replace("/transaction");
      } else if (paymentStatus === "PENDING") {
        setWebViewVisible(false);
        // console.log('ini paymentstatus pending terbaca')
        router.push(`/transaction/transOnGoingPayment?id=${id}`);
      } else {
        router.replace("/transaction");
      }
    }
  };

  const renderWebView = () => {
    if (transactionPayment && transactionPayment.paymentResponse?.redirectUrl) {
      return (
        <WebView
          source={{ uri: transactionPayment.paymentResponse.redirectUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
        />
      );
    }
    return (
      <View className='flex-1 items-center justify-center'>
        <Text>Tidak dapat memuat halaman pembayaran.</Text>
      </View>
    );
  };

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <SafeAreaView className='flex-1'>
        <StatusBar barStyle='light-content' backgroundColor='#503A3A' />

        <View className='flex-1'>
          <View className='bg-soil pb-7 rounded-b-verylarge mb-5'>
            <HeaderSubMenu title={"Detail Transaksi"} />
          </View>

          {isWebViewVisible ? (
            renderWebView()
          ) : (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                className='gap-6'
                contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
              >
                <View className='px-6'>
                  <MinimizeCard
                    title={"Sisa Waktu Pembayaran"}
                    data={calculateTimeDifference(
                      startDate,
                      transactionHistoryDetail.endOfPay
                    )}
                    icon={"clock"}
                  />
                </View>

                <View className='px-6 mt-6'>
                  <MinimizeCard
                    title={"Tanggal Pendakian"}
                    data={`${formattedDate(
                      transactionHistoryDetail.startDate
                    )} s/d ${formattedDate(transactionHistoryDetail.endDate)}`}
                    icon={"mountain-sun"}
                  />
                </View>

                <View className='px-6 mt-6'>
                  <DetailTourGuideGunungCard
                    tourGuideName={transactionHistoryDetail.tourGuideName}
                    orderId={transactionHistoryDetail.id}
                    mountainName={transactionHistoryDetail.mountainName}
                    hikingPointName={transactionHistoryDetail.hikingPointName}
                    tourGuideImage={transactionHistoryDetail.tourGuideImage}
                  />
                </View>

                <View className='px-6 mt-6'>
                  <DetailHikers data={transactionHistoryDetail.hikers} />
                </View>

                <View className='mt-6 gap-5'>
                  <Text className='font-ibold text-soil ml-6'>
                    Detail Harga
                  </Text>
                  <FixedHarga
                    days={transactionHistoryDetail.days}
                    tourGuidePriceEachDay={
                      transactionHistoryDetail.tourGuidePerDay
                    }
                    tourGuidePriceTotal={
                      transactionHistoryDetail.totalPriceTourGuide
                    }
                    entranceFeeEachDay={transactionHistoryDetail.entryPerDay}
                    entranceFeeTotal={transactionHistoryDetail.totalEntry}
                    simaksiPriceEachPerson={
                      transactionHistoryDetail.priceSimaksi
                    }
                    simaksiPriceTotal={
                      transactionHistoryDetail.totalPriceSimaksi
                    }
                    additionalTourGuidePricePerDayPerPerson={
                      transactionHistoryDetail.additionalPerDay
                    }
                    totalAdditionalTourGuidePricePerDayPerPerson={
                      transactionHistoryDetail.totalPriceAdditional
                    }
                    porterPricePerDayPerPerson={
                      transactionHistoryDetail.porterPerDay
                    }
                    porterCount={transactionHistoryDetail.porter}
                    porterPriceTotal={transactionHistoryDetail.totalPricePorter}
                    adminCost={transactionHistoryDetail.adminCost}
                    totalPrice={transactionHistoryDetail.totalPrice}
                    hikersCount={
                      transactionHistoryDetail.hikers
                        ? transactionHistoryDetail.hikers.length
                        : 0
                    }
                  />
                </View>

                <View className='mt-6'>
                  <CatatanUntukTourGuide
                    isEditable={false}
                    title={"Catatan kepada tour guide"}
                    catatan={transactionHistoryDetail.customerNote}
                  />
                </View>

                <View className='mt-6'>
                  <TipsMeetingWithGuide />
                </View>
              </ScrollView>
              <View className='w-full flex-row justify-between bg-white px-6 py-3'>
                <View className='flex-col gap-1'>
                  <Text className='font-iregular text-thistle text-sm'>
                    Total
                  </Text>
                  <Text className='font-ibold text-soil text-lg'>
                    {formatCurrency(transactionHistoryDetail.totalPrice)}
                  </Text>
                </View>
                <CustomButton
                  buttonHandling={continueHandling}
                  customStyle='bg-soil w-40'
                  title='Bayar Sekarang'
                />
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default TransactionOnGoingPaymentScreen;
