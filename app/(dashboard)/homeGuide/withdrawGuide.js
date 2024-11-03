import { View, Text, StatusBar, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../../../components/miniComponent/CustomButton';

const WithdrawGuideScreen = () => {
  const { maxAmount } = useLocalSearchParams();

  const [amount, setAmount] = useState(0);
  const [displayAmount, setDisplayAmount] = useState('Rp 0');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const numericMaxAmount = parseInt(maxAmount, 10) || 0;

  useEffect(() => {
    // console.log(`Max Amount: ${numericMaxAmount}`);
    setIsLoading(false);
  }, [maxAmount]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleAmountChange = (text) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ''), 10) || 0;

    if (numericValue > numericMaxAmount) {
      setErrorMessage(`Nominal yang mau ditarik melebihi ${formatCurrency(numericMaxAmount)}`);
    } else {
      setErrorMessage('');
    }

    setAmount(numericValue);
    setDisplayAmount(formatCurrency(numericValue));
    // console.log(`Amount: ${numericValue}`); 
  };

  const withdrawButtonHandling = () => {

  }

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor="#503A3A" barStyle="light-content" />
      <View className="flex-1 bg-grayCustom gap-6">
        <View className="bg-soil pt-3 pb-7 rounded-b-verylarge mb-5">
          <HeaderSubMenu title="Tarik Uang" />
        </View>

        <View className="py-6 gap-7 rounded-verylarge bg-white mx-6 border-[1px] border-borderCustom">
          <View className="gap-2 px-6">
            <Text className="font-iregular text-sm text-thistle">Yang mau ditarik</Text>
            {isLoading ? (
              <ActivityIndicator size="small" color="#503A3A" />
            ) : (
              <>
                <TextInput
                  placeholder="Rp 0"
                  placeholderTextColor="#91A0B8"
                  value={displayAmount}
                  keyboardType="numeric"
                  onChangeText={handleAmountChange}
                  className="font-ibold text-3xl text-evergreen"
                />
                {errorMessage && (
                  <Text className="font-iregular text-errorHover text-sm">{errorMessage}</Text>
                )}
              </>
            )}
          </View>
        </View>

        <View className="border-borderCustom border-[1px] bg-white rounded-xl mx-6 px-5 py-5 flex-row justify-between items-center">
            <View className="flex-row items-center gap-[15] ">
                <Ionicons name="card" color={"#ECD768"} size={20} />
                <View className="gap-[5]">
                    <Text className="font-imedium text-base color-soil">BRI - Nomor Rekening</Text>
                    <Text className="font-iregular text-sm text-thistle">Nama Pemilik Rekening</Text>
                </View>
            </View>
            <TouchableOpacity>
            {/* harusnya pakai yg material community icons */}
              {/* <MaterialCommunityIcons name='pencil' color={"#503A3A"} size={20} /> */}
              <Ionicons name='pencil' color={'#503A3A'} size={20} />
            </TouchableOpacity>
        </View>

        <View className="items-center justify-center px-6">
        <CustomButton
            buttonHandling={withdrawButtonHandling}
            customStyle="bg-soil min-w-full"
            title="Ajukan penarikan ke admin"
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default WithdrawGuideScreen;
