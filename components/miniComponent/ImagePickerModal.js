import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerModal = ({ visible, onClose, onImagePicked }) => {
    const handleCamera = async () => {

        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera is required!");
            return;
        }
        
        const image = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!image.canceled) {
            onImagePicked(image.assets[0]); 
        }
    };

    const handleGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access gallery is required!");
            return;
        }

        const image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!image.canceled) {
            onImagePicked(image.assets[0]);
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View className="flex-1 justify-center items-center bg-black">
                <View className="bg-white rounded-lg p-5">
                    <Text className="text-lg mb-4">Choose a Source</Text>
                    <TouchableOpacity onPress={handleCamera} className="mb-3">
                        <Text>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGallery} className="mb-3">
                        <Text>Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ImagePickerModal;
