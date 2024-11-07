import {
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import { useLocalSearchParams } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { withdrawTransactionGuide } from "../../../redux/statsTransactionGuideSlice";

const WithdrawGuideScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const { maxAmount } = useLocalSearchParams();
  const [amount, setAmount] = useState(0);
  const [displayAmount, setDisplayAmount] = useState("Rp 0");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const numericMaxAmount = parseInt(maxAmount) || 0;

  useEffect(() => {
    setIsLoading(false);
  }, [maxAmount]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleAmountChange = (text) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ""), 10) || 0;

    if (numericValue > numericMaxAmount) {
      setErrorMessage(
        `Nominal yang mau ditarik melebihi ${formatCurrency(numericMaxAmount)}`
      );
    } else {
      setErrorMessage("");
    }

    setAmount(numericValue);
    setDisplayAmount(formatCurrency(numericValue));
  };

  const handleMessageChange = (text) => {
    setMessage(text);
  };

  const withdrawButtonHandling = () => {
    dispatch(
      withdrawTransactionGuide({
        id: userId,
        nominal: amount,
        message: message,
      })
    );
  };

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor='#503A3A' barStyle='light-content' />
      <View className='flex-1 bg-grayCustom gap-6'>
        <View className='bg-soil pt-3 pb-7 rounded-b-verylarge mb-5'>
          <HeaderSubMenu title='Tarik Uang' />
        </View>

        <View className='py-6 gap-7 rounded-verylarge bg-white mx-6 border-[1px] border-borderCustom'>
          <View className='gap-2 px-6'>
            <Text className='font-iregular text-sm text-thistle'>
              Nominal penarikan
            </Text>
            {isLoading ? (
              <ActivityIndicator size='small' color='#503A3A' />
            ) : (
              <>
                <TextInput
                  placeholder='Rp 0'
                  placeholderTextColor='#91A0B8'
                  value={displayAmount}
                  keyboardType='numeric'
                  onChangeText={handleAmountChange}
                  className='font-ibold text-3xl text-evergreen'
                />
                {errorMessage && (
                  <Text className='font-iregular text-errorHover text-sm'>
                    {errorMessage}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>

        <View className='py-6 gap-7 rounded-verylarge bg-white mx-6 border-[1px] border-borderCustom'>
          <View className='gap-2 px-6'>
            <Text className='font-iregular text-sm text-thistle'>
              Masukan pesan untuk konfirmasi penarikan
            </Text>
            {isLoading ? (
              <ActivityIndicator size='small' color='#503A3A' />
            ) : (
              <>
                <TextInput
                  placeholder='...'
                  placeholderTextColor='#91A0B8'
                  value={message}
                  keyboardType='default'
                  onChangeText={handleMessageChange}
                  className='font-iregular text-base text-evergreen'
                />
                {errorMessage && (
                  <Text className='font-iregular text-errorHover text-sm'>
                    {errorMessage}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>
        <View className='items-center justify-center px-6'>
          <CustomButton
            buttonHandling={withdrawButtonHandling}
            customStyle='bg-soil min-w-full'
            title='Ajukan penarikan ke admin'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WithdrawGuideScreen;
