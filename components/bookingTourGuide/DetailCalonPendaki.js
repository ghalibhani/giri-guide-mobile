import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import CustomButton from '../miniComponent/CustomButton'
import TambahCalonPendaki from './TambahCalonPendaki'
import moment from 'moment'
import CustomModalConfirmation from '../miniComponent/CustomModalConfirmation'

const DetailCalonPendaki = ({continueHandling, hikerDetails, setHikerDetails, showModalConfirmationDataHiker, handleCancelCorfirmationDataHiker, isModalConfirmationDataHikerVisible}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null)

    const showModalPendaki = (index) => {
        setEditingIndex(index)
        setIsModalVisible(true);
    }

    const closeModalPendaki = () => {
        setIsModalVisible(false)
    }

    const saveHandler = (newData) => {
        setHikerDetails((prevHikers) => 
            prevHikers.map((hiker, index) => 
                index === editingIndex ? { ...hiker, ...newData } : hiker
            )
        )
        setIsModalVisible(false)
    }

    const formattedDate = (date) => {
        return moment(date).format("DD MMM YYYY")
    }

    const isHikerDetailsComplete = hikerDetails.every(
        (hiker) => hiker.nik && hiker.fullName && hiker.birthDate
    )

    return (
        <View className="gap-6 flex-1 flex-col justify-between">
            <View className="gap-6">
                <Text className="font-ibold text-soil">Detail Calon Pendaki</Text>

                <View className="gap-3">
                    {hikerDetails.map((hiker, index) => (
                        <View 
                            key={index} 
                            className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]"
                        >
                            <View className="flex-row items-center justify-between">
                                <View className="flex-row items-center gap-[15] max-w-[70%]">
                                    <Ionicons name="person" color={"#ECD768"} size={20} />
                                    <View className="gap-[5]">
                                        {hiker.fullName ? (
                                            <>
                                                <Text className="font-iregular text-sm text-thistle">
                                                    NIK - {hiker.nik || 'NIK PENDAKI'}
                                                </Text>
                                                <Text className="font-imedium text-base color-evergreen">
                                                    {hiker.fullName}
                                                </Text>
                                                <Text className="font-iregular text-sm text-thistle">
                                                    Tanggal Lahir - {formattedDate(hiker.birthDate)}
                                                </Text>
                                            </>
                                        ) : (
                                            <Text className="font-imedium text-base color-evergreen">
                                                Masukkan Detail Pendaki
                                            </Text>
                                        )}
                                    </View>
                                </View>
                                <TouchableOpacity 
                                    onPress={() => showModalPendaki(index)} 
                                    className="w-[45px] align-middle justify-center border- px-4 py-2"
                                >
                                    <MaterialCommunityIcons name="pencil" color={"#45594E"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    
                    {/* <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-[15] ">
                                <Ionicons name="person" color={"#ECD768"} size={20} />
                                <View className="gap-[5]">
                                <Text className="font-imedium text-base color-evergreen">Masukkan Detail Pendaki</Text>
                                </View>
                            </View>

                            <TouchableOpacity className="w-[45px] align-middle justify-center border- px-4 py-2">
                                <MaterialCommunityIcons name="pencil" color={"#45594E"} size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>
                     */}

                    {/* Versi terisi */}

                    {/* <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-[15] ">
                                <Ionicons name="person" color={"#ECD768"} size={20} />
                                <View className="gap-[5]">
                                    <Text className="font-iregular text-sm text-thistle">NIK - NIK PENDAKI</Text>
                                    <Text className="font-imedium text-base color-evergreen">Nama Pendaki</Text>
                                    <Text className="font-iregular text-sm text-thistle">Tanggal Lahir - DD/MM/YYYY</Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={showModalPendaki} className="w-[45px] align-middle justify-center border- px-4 py-2">
                                <MaterialCommunityIcons name="pencil" color={"#45594E"} size={20} />
                            </TouchableOpacity>

                        </View>
                    </View> */}
                    
                </View>
            </View>

            <CustomButton
                buttonHandling={showModalConfirmationDataHiker}
                customStyle={`min-w-full mb-16 ${isHikerDetailsComplete ? "bg-soil" : "bg-gray-300"}`}
                title="Lanjutkan"
                isDisabled={!isHikerDetailsComplete}
            />

            <CustomModalConfirmation isModalVisible={isModalConfirmationDataHikerVisible} handleCancel={handleCancelCorfirmationDataHiker} handleConfirm={continueHandling}>
                <Text className="text-base mb-4 font-iregular text-evergreen text-center">
                    Apakah Anda yakin dengan data yang sudah dimasukkan? Jika ya, Anda tidak dapat mengubahnya lagi.
                </Text>
            </CustomModalConfirmation>

            <TambahCalonPendaki 
                isVisible={isModalVisible}
                onClose={closeModalPendaki}
                dataPendaki={hikerDetails[editingIndex] || {}}
                onSave={saveHandler}
            />
        </View>
    )
}

export default DetailCalonPendaki

const styles = StyleSheet.create({})