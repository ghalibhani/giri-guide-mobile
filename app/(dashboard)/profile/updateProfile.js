import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderBackProfile from '../../../components/HeaderBackProfile'
import CustomInputOrPickerWithIcon from '../../../components/miniComponent/CustomInputOrPickerWithIcon'
import CustomButton from '../../../components/miniComponent/CustomButton'

const UpdateProfileScreen = () => {
    const nik = '121252352353'
    const [fullName, setFullName] = useState('Giri Guide Wow');
    const [address, setAddress] = useState('Jalan Topaz No.7 Malang')
    const [gender, setGender] = useState(null)

    const updateProfileHandler = () => {

    }

    const formattedDate = (date) => {
        return new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(date);
    }

    return (
        <SafeAreaView className='flex-1 px-6'>
            <HeaderBackProfile text={"Update Profil"} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="gap-4">
                    <CustomInputOrPickerWithIcon 
                        title={"NIK"}
                        value={nik}
                        isEditable={false}
                        nameIcon={"card-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Tanggal Lahir"}
                        value={formattedDate(new Date())}
                        isEditable={false}
                        nameIcon={"calendar-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Email"}
                        value={"giriguide@gmail.com"}
                        isEditable={false}
                        nameIcon={"mail-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Nama Lengkap"}
                        value={fullName}
                        setValue={setFullName}
                        isEditable={true}
                        nameIcon={"person-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Jenis Kelamin"}
                        value={gender}
                        setValue={setGender}
                        isEditable={true}
                        nameIcon={"male-female-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Alamat"}
                        value={address}
                        setValue={setAddress}
                        isEditable={true}
                        nameIcon={"home-outline"}
                    />

                    <CustomInputOrPickerWithIcon 
                        title={"Foto Profil"}
                        val
                    />

                    <CustomButton 
                        buttonHandling={updateProfileHandler}
                        customStyle={"bg-evergreen"}
                        title={"Update"}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UpdateProfileScreen