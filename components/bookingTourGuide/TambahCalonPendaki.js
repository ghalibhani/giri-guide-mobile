import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'
import CustomButton from '../miniComponent/CustomButton'
import DateTimePicker from '@react-native-community/datetimepicker';

const TambahCalonPendaki = ({isVisible, onClose, onSave, dataPendaki}) => {
    const [nik, setNik] = useState('')
    const [name, setName] = useState('')
    const [birthDate, setBirthDate] = useState(new Date());
    const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);

    const showBirthDatePickerHandler = () => {
        setShowBirthDatePicker(true);
    };

    const onChangeBirthDate = (event, selectedDate) => {
        const currentDate = selectedDate || birthDate;
        setShowBirthDatePicker(!showBirthDatePicker);
        setBirthDate(currentDate);
    };

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onClose}
        >
            <TouchableOpacity
                className="flex-1 bg-black/50 justify-end" 
                activeOpacity={1} 
                onPress={onClose}
            >

                <TouchableOpacity activeOpacity={1}>
                    <View className="justify-center align-middle bg-transparent">
                        <View className="px-6 py-5 bg-white rounded-t-verylarge items-start gap-6">
                            <Text className="font-ibold text-soil">Isi Detail Calon Pendaki</Text>

                            <View className="gap-4">
                                <View className="border-borderCustom border-[1px] min-w-full bg-white rounded-xl px-5 py-5 gap-[5]">
                                    <Text className="font-iregular text-sm text-thistle">NIK (Nomor Induk Kependudukan)</Text>
                                    <TextInput 
                                        placeholder='Masukkan NIK pendaki' 
                                        placeholderTextColor={'#D6D6D6'}
                                        value={nik}
                                        keyboardType='number-pad'
                                        onChangeText={setNik}
                                        className="font-imedium text-base color-evergreen"
                                    />
                                </View>

                                <View className="border-borderCustom border-[1px] min-w-full bg-white rounded-xl px-5 py-5 gap-[5]">
                                    <Text className="font-iregular text-sm text-thistle">Nama Lengkap</Text>
                                    <TextInput 
                                        placeholder='Masukkan Nama pendaki' 
                                        placeholderTextColor={'#D6D6D6'}
                                        value={name}
                                        onChangeText={setName}
                                        className="font-imedium text-base color-evergreen"
                                    />
                                </View>

                                <View className="border-borderCustom border-[1px] min-w-full bg-white rounded-xl px-5 py-5 gap-[5]">
                                    <Text className="font-iregular text-sm text-thistle">Tanggal Lahir</Text>
                                    <TouchableOpacity onPress={showBirthDatePickerHandler}>
                                        <Text className="font-imedium text-base color-evergreen">{moment(birthDate).format('DD MMM YYYY')}</Text>
                                    </TouchableOpacity>
                                    {showBirthDatePicker && (
                                        <DateTimePicker 
                                            value={birthDate}
                                            mode='date'
                                            display='default'
                                            onChange={onChangeBirthDate}
                                        />
                                    )}
                                </View>

                                <CustomButton
                                    buttonHandling={onSave}
                                    customStyle="bg-evergreen min-w-full"
                                    title="Simpan Detail Pendaki"
                                />

                            </View>
                            
                        </View>
                    </View>
                </TouchableOpacity>

            </TouchableOpacity>
        </Modal>
    )
}

export default TambahCalonPendaki

const styles = StyleSheet.create({})