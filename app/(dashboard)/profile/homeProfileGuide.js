import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TransactionHeader from '../../../components/transaksiCustomer/TransactionHeader'
import CardProfile from '../../../components/profileTourGuide/CardProfile'
import ShortDescription from '../../../components/profileTourGuide/ShortDescription'
import CardRatingReview from '../../../components/profileTourGuide/CardRatingReview'
import SubMenuProfileTourGuide from '../../../components/profileTourGuide/SubMenuProfileTourGuide'

const ProfileGuideScreen = () => {
    return (
        <SafeAreaView className='flex-1'>
            <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
            <View className="gap-5 bg-grayCustom flex-1">
                <TransactionHeader titleHeader='Profile' />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 0 }}>
                    <View className="gap-1">
                        <View className="gap-5">
                            <CardProfile />
                            <ShortDescription />
                        </View>

                        <CardRatingReview />
                        <SubMenuProfileTourGuide />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ProfileGuideScreen