import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInput = ({
  title,
  secureTextEntry,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  customStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${customStyles} gap-2`}>
      <Text className='font-ibold text-sm text-evergreen'>{title}</Text>

      <View className='flex-row border-[1px] rounded-xl border-borderCustom items-center justify-between bg-white px-4 py-[14px]'>
        <TextInput
          className=' text-evergreen font-iregular text-sm w-5/6'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#91A0B8'
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={props.keyboardType}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className=''
          >
            <MaterialCommunityIcons
              name={!showPassword ? "eye" : "eye-off"}
              size={16}
              color={"#91A0B8"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
