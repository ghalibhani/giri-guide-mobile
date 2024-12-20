import { View, Text, TextInput } from "react-native";
import React from "react";

const CatatanUntukTourGuide = ({ isEditable, catatan, setCatatan, title, required, minLength}) => {
  return (
    <View className='gap-[8] px-6'>
      <Text className='font-ibold text-soil text-sm'>{title}
        {required && <Text className='font-imedium text-sm text-errorHover'>*</Text>}
      </Text>
      <View className='border-borderCustom border-[1px] bg-white rounded-xl px-6 py-5 gap-[5]'>
        <TextInput
          editable={isEditable}
          placeholder={`Catatan minimal ${minLength ? minLength : 20} karakter dan maksimal 150 karakter. Kamu harus memberi catatan ${title === 'Beri catatan ke tour guide' ? 'tentang jam pertemuan dan kebutuhan kamu' : ''}`}
          placeholderTextColor={"#D6D6D6"}
          value={catatan}
          onChangeText={setCatatan}
          multiline={true}
          numberOfLines={5}
          className='font-imedium text-base align-top color-evergreen'
        />
      </View>
    </View>
  );
};

export default CatatanUntukTourGuide;
