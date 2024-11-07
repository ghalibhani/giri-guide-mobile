import { View, Text, Animated } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import FixedCompletedSingleHiker from '../miniComponent/FixedCompletedSingleHiker';

const FixedDetailCalonPendaki = ({detailCalonPendaki, isTourGuide}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [heightAnim] = useState(new Animated.Value(0));

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
        Animated.timing(heightAnim, {
            toValue: isVisible ? 0 : 4000, 
            duration: 300,
            useNativeDriver: false, 
        }).start();
    };
    return (
        <View className="gap-5">
            <TouchableOpacity onPress={toggleVisibility} className="flex-row items-center justify-between">
                <Text className="font-ibold text-soil">Detail Calon Pendaki</Text>
                <Ionicons 
                    name={isVisible ? 'chevron-up' : 'chevron-down'} 
                    size={24} 
                    color="#503A3A"
                    style={{ marginLeft: 10 }}
                />
            </TouchableOpacity>
            
            <Animated.View style={{ overflow: 'hidden', maxHeight: heightAnim }}>
                {isVisible && (
                    <View className="gap-4">
                        {detailCalonPendaki && detailCalonPendaki.length > 0 ? (
                            detailCalonPendaki.map((hiker, index) => (
                                <FixedCompletedSingleHiker 
                                    key={index}
                                    data={hiker}
                                    isTourGuide={isTourGuide}
                                />
                            ))
                        ) : (
                            <Text>No data available</Text>
                        )}
                    </View>
                )}
            </Animated.View>
                
        </View>
    )
}

export default FixedDetailCalonPendaki