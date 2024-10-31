import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const FormTanggalCounter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const [count, setCount] = useState(0);

    const showStartDatePickerHandler = () => {
        setShowStartDatePicker(true);
    };

    const onChangeStartDate = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(!showStartDatePicker);
        setStartDate(currentDate);
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
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
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
            </View>
        </View>
    );
};

export default FormTanggalCounter;
