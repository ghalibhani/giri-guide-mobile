import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FixedCompletedSingleHiker from '../miniComponent/FixedCompletedSingleHiker'

const DetailHikers = ({data}) => {
    return (
        <View className="gap-5">
            <Text className="font-ibold text-soil">Detail Calon Pendaki</Text>

            <View className="gap-4">
                <FixedCompletedSingleHiker 
                    data={data}
                />
                <FixedCompletedSingleHiker 
                    data={data}
                />
                <FixedCompletedSingleHiker 
                    data={data}
                />
            </View>
            
        </View>
    )
}

export default DetailHikers

const styles = StyleSheet.create({})