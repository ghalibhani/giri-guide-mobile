import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const CustomModalConfirmation = ({children, isModalVisible, handleCancel, handleConfirm}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCancel}
      >
        <View className="flex-1 justify-center items-center bg-black/50 w-full">
          <View className="w-72 p-5 bg-white rounded-xl items-center min-w-[90%] mx-4 px-6 py-6">

            <Image 
                  source={require('../../assets/confirmation.png')}
                  className="w-80 h-80 mb-5"
                  resizeMode='cover'
            />

            {children}

            <View className="flex-row justify-center gap-5 w-full">
              <CustomButton 
                title={"Ya"}
                customStyle={"w-[45%] bg-evergreen"}
                buttonHandling={handleConfirm}
              />

              <CustomButton 
                title={"Tidak"}
                customStyle={"w-[45%] bg-errorHover"}
                buttonHandling={handleCancel}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default CustomModalConfirmation