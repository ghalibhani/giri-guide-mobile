import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchButton = ({keyword, setKeyword, placeholder}) => {
    return (
        <View className="px-4 py-2 bg-white flex-row gap-4 mx-6 items-center rounded-verylarge">
            <Ionicons name='search' color={"#45594E"} size={20} />

            <TextInput 
                className=" text-evergreen font-iregular text-base w-full flex-shrink"
                value={keyword}
                placeholder={placeholder}
                placeholderTextColor="#91A0B8"
                onChangeText={setKeyword}
                keyboardType='default'
            />
        </View>
    )
}

export default SearchButton