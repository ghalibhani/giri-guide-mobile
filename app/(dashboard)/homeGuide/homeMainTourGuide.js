import {
  View,
  Text,
  Modal,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeTransactionGuide } from "../../../redux/statsTransactionGuideSlice";

const HomeMainTourGuideScreen = () => {
  const tourGuideName = useSelector((state) => state.auth.name);
  const tourGuideUserId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchHomeTransactionGuide(tourGuideUserId)).finally(() =>
      setRefreshing(false)
    );
  };

  useEffect(() => {
    dispatch(fetchHomeTransactionGuide(tourGuideUserId));
  }, [dispatch, tourGuideUserId]);

  const { statsGuide } = useSelector((state) => state.statsTransactionGuide);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formattedDate = (date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <ScrollView
        className='gap-5 bg-grayCustom flex-1'
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className='gap-5 bg-grayCustom flex-1'>
          <View className='bg-soil flex-row justify-between rounded-b-verylarge py-6 px-6 pt-6'>
            <Text className='font-ibold text-xl text-ivory'>
              Hai, {tourGuideName}
            </Text>
            <View className='flex-row gap-5'>
              <TouchableOpacity>
                <Link href={`/homeGuide/walletGuide`}>
                  <Ionicons name='wallet-outline' color={"#FBF6D9"} size={24} />
                </Link>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 0 }}
          >
            <View className='gap-6'>
              <View className='pt-6 gap-7 rounded-verylarge bg-white mx-6'>
                <View className='gap-2 px-6 '>
                  <Text className='font-iregular text-sm text-thistle'>
                    Total Balance
                  </Text>
                  <Text className='font-ibold text-3xl text-evergreen'>
                    {formatCurrency(statsGuide?.totalBalance)}
                  </Text>
                </View>

                <View className='rounded-verylarge bg-daisy px-6 py-5 flex-row justify-between'>
                  <View className='gap-[5]'>
                    <Text className='font-iregular text-sm text-soil'>
                      Laporan Pemasukan
                    </Text>
                    <Text className='font-ibold text-base text-evergreen'>
                      {formatCurrency(statsGuide?.totalIncome)}
                    </Text>
                  </View>

                  <View className='gap-[5]'>
                    <Text className='font-iregular text-sm text-soil'>
                      Laporan Pengeluaran
                    </Text>
                    <Text className='font-ibold text-base text-evergreen'>
                      {formatCurrency(statsGuide?.totalWithdraw)}
                    </Text>
                  </View>
                </View>
              </View>

              <View className='flex-row justify-between gap-4 mx-6'>
                <View className='px-6 py-5 gap-[5] bg-soil rounded-verylarge flex-1'>
                  <Text className='font-iregular text-sm text-oat'>
                    Pendakian berhasil
                  </Text>
                  <Text className='font-ibold text-base text-ivory'>
                    {statsGuide?.hikingDone}
                  </Text>
                </View>

                <View className='px-6 py-5 gap-[5] bg-soil rounded-verylarge flex-1'>
                  <Text className='font-iregular text-sm text-oat'>
                    Pendakian ditolak
                  </Text>
                  <Text className='font-ibold text-base text-ivory'>
                    {statsGuide?.hikingRejected}
                  </Text>
                </View>
              </View>

              <View className='rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]'>
                <Text className='font-iregular text-sm text-soil'>
                  Jadwal terdekat
                </Text>
                <Text className='font-ibold text-base text-evergreen'>
                  {statsGuide?.nextHiking
                    ? formattedDate(new Date(statsGuide?.nextHiking))
                    : "-"}
                </Text>
              </View>

              <View className='rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]'>
                <Text className='font-iregular text-sm text-soil'>
                  Banyak pendakian yang belum selesai{" "}
                </Text>
                <Text className='font-ibold text-base text-evergreen'>
                  {statsGuide?.waitingHiking}
                </Text>
              </View>

              <View className='rounded-verylarge bg-daisy px-6 py-5 mx-6 gap-[5]'>
                <Text className='font-iregular text-sm text-soil'>
                  Banyak pendakian yang belum disetujui{" "}
                </Text>
                <Text className='font-ibold text-base text-evergreen'>
                  {statsGuide?.waitingApprove}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeMainTourGuideScreen;
