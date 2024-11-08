import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const FormTanggalCounter = ({count, setCount, startDate, setStartDate, endDate, setEndDate, initialDate, maxHiker}) => {
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const minStartDate = initialDate
    const [minEndDate, setMinEndDate] = useState(moment(initialDate).add(1, 'days').toDate());
    const [maxEndDate, setMaxEndDate] = useState(moment(initialDate).add(3, 'days').toDate());

    const [maxHikerErrorMessage, setMaxHikerErrorMessage] = useState('');

    const showStartDatePickerHandler = () => {
        setShowStartDatePicker(true);
    };

    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(!showStartDatePicker);
        setStartDate(currentDate);

        const newMinEndDate = moment(currentDate).add(1, 'days').toDate();
        const newMaxEndDate = moment(currentDate).add(3, 'days').toDate();

        setMaxEndDate(newMaxEndDate);
        setMinEndDate(newMinEndDate)

        if (endDate < newMinEndDate || endDate > newMaxEndDate) {
            setEndDate(newMinEndDate);
        }
    };

    const showEndDatePickerHandler = () => {
        setShowEndDatePicker(true);
    };

    const onChangeEndDate = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(Platform.OS === 'ios');
        setEndDate(currentDate);
    };

    const increment = () => {
        if(count < maxHiker) {
            setCount(count + 1);
            setMaxHikerErrorMessage('')
        } else{
            setMaxHikerErrorMessage(`Tour guide ini hanya bisa memandu maksimal ${maxHiker} pendaki`)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
            setMaxHikerErrorMessage('');
        }
    }

    return (
        <View>
            <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15] mb-5">
                <View className="flex-row items-center gap-[15] ">
                    <Ionicons name='calendar' color={"#ECD768"} size={20} />
                    <View className="gap-[5]">
                        <Text className="font-iregular text-sm text-thistle">Tanggal Awal Pendakian</Text>
                        <TouchableOpacity onPress={showStartDatePickerHandler}>
                            <Text className="font-imedium text-base color-evergreen">{moment(startDate).format('DD MMM YYYY')}</Text>
                        </TouchableOpacity>
                        {showStartDatePicker && (
                            <DateTimePicker 
                                value={startDate}
                                mode='date'
                                display='default'
                                onChange={onChangeStartDate}
                                minimumDate={minStartDate}
                            />
                        )}
                    </View>
                </View>

                <View className="h-[1] bg-borderCustom"></View>

                <View className="flex-row items-center gap-[15] ">
                    <Ionicons name='calendar' color={"#ECD768"} size={20} />
                    <View className="gap-[5]">
                        <Text className="font-iregular text-sm text-thistle">Tanggal Akhir Pendakian</Text>
                        <TouchableOpacity onPress={showEndDatePickerHandler}>
                            <Text className="font-imedium text-base color-evergreen">{moment(endDate).format('DD MMM YYYY')}</Text>
                        </TouchableOpacity>
                        {showEndDatePicker && (
                            <DateTimePicker 
                                value={endDate}
                                mode='date'
                                display='default'
                                onChange={onChangeEndDate}
                                minimumDate={minEndDate}
                                maximumDate={maxEndDate}
                            />
                        )}
                    </View>
                </View>

            </View>

            <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15] mb-5">
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-[15] ">
                        <MaterialIcons name="hiking" color={"#ECD768"} size={20} />
                        <View className="gap-[5]">
                            <Text className="font-iregular text-sm text-thistle">Jumlah Pendaki</Text>
                            <Text className="font-imedium text-base color-evergreen">{count}</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center gap-5">
                        <TouchableOpacity onPress={() => decrement()} className="w-[45px] align-middle justify-center border-2 border-evergreen px-4 py-2 rounded-full">
                            <Text className="font-ibold text-lg ml-[1] text-evergreen">-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => increment()} className="w-[45px] align-middle justify-center border-2 border-evergreen px-4 py-2 rounded-full">
                            <Text className="font-ibold text-lg text-evergreen">+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {maxHikerErrorMessage && (
                    <View className="px-5">
                        <Text className="text-errorHover text-sm font-iregular">{maxHikerErrorMessage}</Text>
                    </View>
                )}
            </View>

            
        </View>
    );
};

export default FormTanggalCounter;
