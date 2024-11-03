import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'

const CustomInputOrPickerWithIcon = ({title, placeholder, value, setValue, keyboardType, isUploadFile, nameIcon, otherIcon, isEditable, onOpenModal, ...props}) => {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: "Pria", value: "MALE" },
        { label: "Wanita", value: "FEMALE" },
    ]);

    return (
        <View
            className={`flex-row justify-around items-center border-borderCustom border-[1px] rounded-xl px-5 py-5 ${
                !isEditable ? "bg-oat" : "bg-white"
            }`}
        >
            <View className="flex-row items-center justify-between gap-5">
                {otherIcon ? (
                    <Ionicons name={nameIcon} size={20} color={isEditable ? "#ECD768" : "#503A3A"} className="justify-center" />
                ):(
                    <Ionicons name={nameIcon} size={20} color={isEditable ? "#ECD768" : "#503A3A"} className="justify-center" />
                ) }
                
                
                <View className={`flex-col ${title !== "Jenis Kelamin" ? "gap-[5]" : "gap-0"} flex-1`}>
                    <Text className="font-iregular text-sm w-full text-thistle">{title}</Text>

                    {title === "Jenis Kelamin" &&
                        <DropDownPicker
                            open={open}
                            value={value || null}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            dropDownDirection='TOP'
                            dropDownContainerStyle={{
                                backgroundColor: "#fafafa", 
                                borderColor: "#503A3A", 
                                maxWidth: "150%",
                                zIndex: 1000,
                                padding: 0,
                                
                                marginVertical: 0
                            }}
                            style={{
                                borderColor:"transparent",
                                backgroundColor: "#fff",
                                maxWidth: "150%",
                                paddingHorizontal: 0,
                                paddingVertical: 0,
                                height: 40,
                                padding: 0,
                            }}
                            textStyle={{
                                fontSize: 14,
                                color: "#45594E",
                                padding: 0,
                            }}
                            labelStyle={{
                                fontFamily: "Inter-Medium"
                            }}
                            placeholder="Pilih Jenis Kelamin"
                            placeholderStyle={{
                                color: "#45594E",
                                fontFamily: "Inter-Medium"                                
                            }}
                            arrowIconStyle={{
                                width: 20,
                                height: 20,
                            }}
                            arrowColor="#503A3A"
                            selectedItemContainerStyle={{
                                backgroundColor: "#ECD768",
                            }}
                            selectedItemLabelStyle={{
                                color: "#45594E",
                            }}
                            listItemContainerStyle={{
                                borderColor: "#fafafa", 
                            }}
                            listItemLabelStyle={{
                                color: "#45594E",
                            }}
                            listMode='SCROLLVIEW'
                            onChangeValue={setValue}
                        />
                    }

                    {!isUploadFile && title !== "Jenis Kelamin" &&
                        <TextInput 
                            placeholder={placeholder} 
                            placeholderTextColor={'#91A0B8'}
                            value={value}
                            editable={isEditable}
                            keyboardType={keyboardType}
                            onChangeText={setValue}
                            className="font-imedium text-base color-evergreen"
                        />
                    }

                    {isUploadFile && 
                        <Text className="font-imedium text-base color-evergreen">{title}</Text>

                    }
                </View>
            </View>

            {isUploadFile && 
                <TouchableOpacity onPress={() => onOpenModal()}>
                    <Feather name='upload' size={20} color={"#503A3A"} />
                </TouchableOpacity>
                
            }
            
        </View>
  )
}

export default CustomInputOrPickerWithIcon