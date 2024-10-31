import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CatatanUntukTourGuide = ({isEditable, catatan, setCatatan}) => {
    return (
        <View className="gap-[15]">
            <Text className="font-ibold text-soil px-6 text-sm">Catatan ke Tour Guide</Text>
            <View className="mx-5 border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[5]">
                <TextInput 
                    editable={isEditable}
                    placeholder='Catatan maksimal 150 karakter' 
                    placeholderTextColor={'#D6D6D6'}
                    value={catatan}
                    onChangeText={setCatatan}
                    multiline={true}
                    numberOfLines={4}
                    className="font-imedium text-base align-top color-evergreen"
                />
            </View>
        </View>
    )
}

export default CatatanUntukTourGuide