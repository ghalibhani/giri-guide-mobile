import { View, Text } from 'react-native'
import React from 'react'
import ButtonProfile from '../ButtonProfile'
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'

const SubMenuProfileTourGuide = () => {
  return (
    <View className="px-6 bg-white rounded-t-verylarge py-6">
        <ButtonProfile text={"Informasi Personal"}>
          <Octicons name='person' size={18} color={"#FBF6D9"} />
        </ButtonProfile>

        <ButtonProfile text={"Update Profile"}>
          <Octicons name='pencil' size={18} color={"#FBF6D9"} />
        </ButtonProfile>

        <ButtonProfile text={"Ubah Password"}>
          <Ionicons name='key-outline' size={18} color={"#FBF6D9"} />
        </ButtonProfile>

        <ButtonProfile text={"Tentang Aplikasi"}>
          <AntDesign name='exclamationcircleo' size={18} color={"#FBF6D9"} />
        </ButtonProfile>
    </View>
  )
}

export default SubMenuProfileTourGuide