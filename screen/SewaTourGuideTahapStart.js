import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormTanggalCounter from '../components/miniComponent/FormTanggalCounter';
import { useNavigation } from '@react-navigation/native'
import CardKeteranganSewaTourGuide from '../components/bookingTourGuide/CardKeteranganSewaTourGuide';
import HeaderSewaTourGuide from '../components/bookingTourGuide/HeaderSewaTourGuide';
import CustomButton from '../components/miniComponent/CustomButton';

const SewaTourGuideTahapStart = () => {
    const navigation = useNavigation();

    const continueHandling = () => {
        navigation.navigate('SewaTourGuideTigaTahap')
    }

    return (
        <SafeAreaView className="bg-soil flex-1">
            <StatusBar
                backgroundColor={"#503A3A"}
                barStyle={"light-content"}
            />

            <View  className="ml-6 mt-5">
                <HeaderSewaTourGuide/>
            </View>

            <View className="ml-6 mt-6 mr-6 mb-5">
                <CardKeteranganSewaTourGuide/>
            </View>

            <View className=" flex-col bg-grayCustom flex-1 justify-between rounded-t-verylarge px-6 pt-5">
                <FormTanggalCounter/>

                <View className="mb-4">
                    <CustomButton
                        buttonHandling={continueHandling}
                        customStyle="bg-soil min-w-full"
                        title="Lanjutkan"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SewaTourGuideTahapStart

const styles = StyleSheet.create({})