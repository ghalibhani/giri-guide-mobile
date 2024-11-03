import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, Octicons } from '@expo/vector-icons'
import CatatanUntukTourGuide from '../miniComponent/CatatanUntukTourGuide';

const RatingDariPendaki = ({rating, review}) => {
    const totalStars = 5; 
    const filledStars = Math.floor(rating); 
    const emptyStars = totalStars - filledStars;
    return (
        <View className="gap-6">
            <View className="gap-5 justify-center items-center px-6 py-5 rounded-verylarge bg-white">
                <Text className="font-ibold text-soil">Rating dari Pendaki</Text>
                <View className="flex-row gap-5">
                    {Array.from({ length: filledStars }, (_, index) => (
                    <FontAwesome key={index} name='star' color={'#ECD768'} size={24} />
                    ))}
                    
                    {Array.from({ length: emptyStars }, (_, index) => (
                    <FontAwesome key={index + filledStars} name='star-o' color={'#91A0B8'} size={24} />
                    ))}
                </View>
            </View>

            {review &&
                <CatatanUntukTourGuide 
                    catatan={review}
                    isEditable={false}
                    title={"Ulasan dari pendaki"}
                />
            }
        </View>
        
    )
}

export default RatingDariPendaki