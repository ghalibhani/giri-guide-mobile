import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const index = () => {
    return (
        <SafeAreaView>
            <Link href='/profile/changePassword'>
                <Text className='text-3xl font-bold'>loncat</Text>
            </Link>
        </SafeAreaView>
        
    )
}

export default index