import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

const DetailTourGuideGunungCard = ({tourGuideName, orderId, mountainName, hikingPointName, tourGuideImage=''}) => {
    const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false)

    const openModal = () => {
        setIsPhotoModalVisible(true)
    }

    const closeModal = () => {
        setIsPhotoModalVisible(false)
    }
    return (
        <View className="gap-5">
            <Text className="font-ibold text-soil">Detail Gunung dan Tour Guide</Text>
            <View className="bg-white rounded-[12px] px-6 py-6 gap-6">

                <View className="flex-row gap-5 items-center">
                    <TouchableOpacity onPress={openModal}>
                        <Image 
                            source={tourGuideImage ? { uri: tourGuideImage } : require("../../assets/profile-image.jpg")}
                            className="w-16 rounded-xl h-16"
                        />
                    </TouchableOpacity>
                    <View className="gap-2">
                        <Text className="color-thistle text-xs font-iregular">Nama Tour Guide</Text>
                        <Text className="color-soil text-sm font-ibold">{tourGuideName}</Text>
                    </View>
                </View>

                <View className="gap-2">
                    <Text className="color-thistle text-xs font-iregular">Kode Pemesanan</Text>
                    <Text className="color-soil text-sm font-ibold">{orderId}</Text>
                </View>

                <View className="gap-2">
                    <Text className="color-thistle text-xs font-iregular">Gunung - Titik Pendakian</Text>
                    <Text className="color-soil text-sm font-ibold">{mountainName} - {hikingPointName}</Text>
                </View>
            </View>

            <Modal
                animationType='fade'
                transparent={true}
                visible={isPhotoModalVisible}
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View className="flex-1 justify-center items-center bg-black/50">
                        <TouchableOpacity onPress={() => {}} className="p-0">
                        <Image
                            source={tourGuideImage ? { uri: tourGuideImage } : require("../../assets/profile-image.jpg")}
                            className="w-96 h-96 rounded-xl"
                            resizeMode='cover'
                        />
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default DetailTourGuideGunungCard

const styles = StyleSheet.create({})