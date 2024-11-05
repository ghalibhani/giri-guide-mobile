import { View, Text, StatusBar, TextInput, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import SearchButton from '../../../components/miniComponent/SearchButton'
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMountains } from '../../../redux/mountainSlice'
import { router } from 'expo-router'

const AllMountainCardsScreen = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const mountains = useSelector((state) => state.mountain.mountains)
  const statusMountains = useSelector((state) => state.mountain.status)
  const errorMountains = useSelector((state) => state.mountain.error)

  useEffect(() => {
    dispatch(fetchAllMountains({page: 1, size: 40}))
    // console.log(statusMountains)
  }, [dispatch])

  const screenWidth = Dimensions.get('window').width;

  const filteredMountains = mountains.filter(mountain => 
    mountain.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const groupedMountainList = filteredMountains.reduce((result, mountain, index) => {
    const rowIndex = Math.floor(index / 2);
    if (!result[rowIndex]) result[rowIndex] = [];
    result[rowIndex].push(mountain);
    return result;
  }, []);

  return (
    <SafeAreaView className=' flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      
      <View className="flex-1 bg-grayCustom">
        <View className='bg-soil pt-4 pb-7 gap-6 rounded-b-verylarge mb-5'>
            <HeaderSubMenu title={'Daftar Gunung'} />
            
            <SearchButton 
              keyword={keyword}
              setKeyword={setKeyword}
              placeholder={"Cari gunung"}
            />
        </View>

        <ScrollView>
          <View className="px-6">
            {groupedMountainList.map((row, rowIndex) => (
              <View key={rowIndex} className="flex-row gap-4 justify-between mb-4">
                {row.map((mountain) => (
                  <TouchableOpacity key={mountain.id} onPress={() => router.push(`/home/mountainDetail?id=${mountain.id}`)} >
                    <View className="relative h-48" style={{ width: (screenWidth - 64) / 2 }}>
                      <Image
                        source={{ uri: mountain.image }}
                        className="w-full h-full rounded-verylarge"
                      />
                      <View className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-verylarge" />
                      <View className="absolute inset-0 bottom-16 flex items-center justify-center px-4">
                        <Text className="text-white text-left text-lg font-ibold">{mountain.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        {/* {mountainList.map((mountainDetail) => (
         
        ))} */}
      </View>
    </SafeAreaView>
  )
}

export default AllMountainCardsScreen