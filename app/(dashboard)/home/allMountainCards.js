import { View, Text, StatusBar, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderSubMenu from '../../../components/miniComponent/HeaderSubMenu'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import SearchButton from '../../../components/miniComponent/SearchButton'
import { Image } from 'react-native';

const AllMountainCardsScreen = () => {
  const [keyword, setKeyword] = useState('')

  const mountainList = [
    {
      id: 1,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Semeru"
    },
    {
      id: 2,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Bromo"
    },
    {
      id: 3,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Argopuro"
    },
    {
      id: 4,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Welirang"
    },
    {
      id: 5,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Arjuno"
    },
    {
      id: 6,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Lawu"
    },
    {
      id: 7,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Raung"
    },
    {
      id: 8,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Kelud"
    },
    {
      id: 9,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Kawi"
    },
    {
      id: 10,
      uriImageMountain: "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      mountainName: "Gunung Pananggunan"
    }
  ];

  const screenWidth = Dimensions.get('window').width;
  
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

        <View className="flex-row gap-4 justify-between px-6">
          
          <View className="relative h-48" style={{ width: (screenWidth - 64 ) / 2 }}>
            <Image
              source={{ uri: mountainList[1].uriImageMountain }} // Replace with your image URI
              className="w-full h-full rounded-verylarge"
            />

            <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-verylarge" />

            <View className="absolute inset-0 bottom-16 flex items-center justify-center px-6">
              <Text className="text-white text-center text-lg font-bold">qeuifqoiwfqoinfqoiwnion</Text>
            </View>
          </View>

          <View className="relative h-48" style={{ width: (screenWidth - 64 ) / 2 }}>
            <Image
              source={{ uri: mountainList[1].uriImageMountain }} // Replace with your image URI
              className="w-full h-full rounded-verylarge"
            />

            <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-verylarge" />

            <View className="absolute inset-0 bottom-16 flex items-center justify-center px-6">
              <Text className="text-white text-center text-lg font-bold">qeuifqoiwfqoinfqoiwnion</Text>
            </View>
          </View>

        </View>
        {/* {mountainList.map((mountainDetail) => (
         
        ))} */}
      </View>
    </SafeAreaView>
  )
}

export default AllMountainCardsScreen