import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const CustomModalSuccess = ({children, isModalVisible, handleDone}) => {
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleDone}
      >
        <View className="flex-1 justify-center items-center bg-black/50 w-full">
          <View className="w-72 p-5 bg-white rounded-xl items-center min-w-[90%] mx-4 px-6 py-6">

            <Image 
                  source={require('../../assets/alert.png')}
                  className="w-80 h-80 mb-5"
                  resizeMode='cover'
            />

            {children}

            <View className="flex-row justify-center gap-5 w-full">
              <CustomButton 
                title={"Tutup"}
                customStyle={"w-full bg-errorHover"}
                buttonHandling={handleDone}
              />
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default CustomModalSuccess