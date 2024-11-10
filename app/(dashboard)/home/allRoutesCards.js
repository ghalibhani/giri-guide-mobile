import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRoutes } from '../../../redux/routesSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import SearchButton from '../../../components/miniComponent/SearchButton'

const AllRoutesCardsScreen = () => {
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()
    
    const travelRoutes = useSelector((state) => state.travelRoute.travelRoutes)
    const statusTravelRoutes = useSelector((state) => state.travelRoute.status)
    const errorTravelRoutes = useSelector((state) => state.travelRoute.error)

    useEffect(() => {
        dispatch(fetchAllRoutes({page: 1, size: 40}))
    }, [dispatch])

    const screenWidth = Dimensions.get('window').width

    const filteredTravelRoutes = travelRoutes.filter(travelRoute =>
        travelRoute.title.toLowerCase().includes(keyword.toLowerCase())
    )

    const groupedTravelRoutesList = filteredTravelRoutes.reduce((result, travelRoute, index) => {
        const rowIndex = Math.floor(index / 2)
        if(!result[rowIndex]) result[rowIndex] = [];
        result[rowIndex].push(travelRoute)
        return result
    }, [])

    return (
        <SafeAreaView className='flex-1'>
            <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      
            <View className="flex-1 bg-grayCustom">
                <View className='bg-soil pt-4 pb-7 gap-6 rounded-b-verylarge mb-5'>
                    <HeaderSubMenu title={'Daftar Gunung'} />
                    
                    <SearchButton 
                    keyword={keyword}
                    setKeyword={setKeyword}
                    placeholder={"Cari rute perjalanan"}
                    />
                </View>

                <ScrollView>
                    <View className="px-6">
                        {groupedTravelRoutesList.map((row, rowIndex) => (
                        <View key={rowIndex} className="flex-row gap-4 justify-between mb-4">
                            {row.map((travelRoute) => (
                            <TouchableOpacity key={travelRoute.id} onPress={() => travelRoute.push(`/home/routeDetail?id=${travelRoute.id}`)} >
                                <View className="relative h-48" style={{ width: (screenWidth - 64) / 2 }}>
                                    <Image
                                        source={{ uri: travelRoute.image }}
                                        className="w-full h-full rounded-verylarge"
                                    />

                                    <View className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-verylarge" />

                                    <View className="absolute inset-0 bottom-16 flex items-center justify-center px-4">
                                        <Text className="text-white text-left text-lg font-ibold">{travelRoute.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            ))}
                        </View>
                        ))}
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default AllRoutesCardsScreen