import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons'
import CustomButton from '../miniComponent/CustomButton'
import TambahCalonPendaki from './TambahCalonPendaki'

const DetailCalonPendaki = ({continueHandling}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModalPendaki = () => {
        setIsModalVisible(true);
    }

    const closeModalPendaki = () => {
        setIsModalVisible(false)
    }

    const saveHandler = () => {
        // ini masih harus ditambahin
        setIsModalVisible(false)
    }

    return (
        <View className="gap-6 flex-1 flex-col justify-between">
            <View className="gap-6">
                <Text className="font-ibold text-soil">Detail Calon Pendaki</Text>

                <View className="gap-3">
                    <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-[15] ">
                                <Ionicons name="person" color={"#ECD768"} size={20} />
                                <View className="gap-[5]">
                                <Text className="font-imedium text-base color-evergreen">Masukkan Detail Pendaki</Text>
                                </View>
                            </View>

                            <TouchableOpacity className="w-[45px] align-middle justify-center border- px-4 py-2">
                                <Octicons name="pencil" color={"#45594E"} size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    

                    {/* Versi terisi */}

                    <View className="border-borderCustom border-[1px] bg-white rounded-xl px-5 py-5 gap-[15]">
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
                                <Octicons name="pencil" color={"#45594E"} size={20} />
                            </TouchableOpacity>

                        </View>
                    </View>
                    
                </View>
            </View>

            <CustomButton
                buttonHandling={continueHandling}
                customStyle="bg-soil min-w-full mb-16"
                title="Lanjutkan"
            />

            <TambahCalonPendaki 
                isVisible={isModalVisible}
                onClose={closeModalPendaki}
                dataPendaki={{}}
                onSave={saveHandler}
            />
        </View>
    )
}

export default DetailCalonPendaki

const styles = StyleSheet.create({})