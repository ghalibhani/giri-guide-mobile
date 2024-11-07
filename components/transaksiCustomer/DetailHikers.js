import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FixedCompletedSingleHiker from '../miniComponent/FixedCompletedSingleHiker'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetailHikers = ({data, isTourGuide}) => {
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
                        {data && data.length > 0 ? (
                            data.map((hiker, index) => (
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

export default DetailHikers

const styles = StyleSheet.create({})