import { View, Text, Image, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/miniComponent/CustomButton';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

const TrialPageScreen = () => {
    const [currentStage, setCurrentStage] = useState(1);

    const images = [
        require('../../../assets/1.png'),
        require('../../../assets/2.png'),
        require('../../../assets/3.png'),
    ];

    // Define shared values for animation
    const imageScale = useSharedValue(0);
    const contentOpacity = useSharedValue(0);

    const nextStage = () => {
        setCurrentStage((prevStage) => prevStage + 1);
    };

    useEffect(() => {
        imageScale.value = 0;
        contentOpacity.value = 0;

        imageScale.value = withSpring(1, { damping: 10, stiffness: 100 });
        contentOpacity.value = withTiming(1, { duration: 500 });
    }, [currentStage]);

    const imageAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: imageScale.value }],
    }));

    const contentAnimatedStyle = useAnimatedStyle(() => ({
        opacity: contentOpacity.value,
    }));

    return (
        <SafeAreaView className="flex-1 justify-center px-6 bg-white">
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {currentStage !== 4 ? (
                <>
                    <Animated.Image
                        source={images[currentStage - 1]}
                        style={[{ width: '100%', height: 253, marginBottom: 40 }, imageAnimatedStyle]}
                        className="mx-auto"
                    />

                    <View className="gap-20">
                        <View className="gap-8">
                            <Animated.Text style={[contentAnimatedStyle]} className="font-ibold text-soil text-2xl text-center">
                                {currentStage === 1 && "Eksplorasi Gunung\ndi Jawa Timur"}
                                {currentStage === 2 && "Tour Guide Profesional\nSiap Mendampingi"}
                                {currentStage === 3 && "Rute dan Info Lengkap\nGunung"}
                            </Animated.Text>

                            <Animated.Text style={[contentAnimatedStyle]} className="font-imedium text-evergreen text-sm text-center">
                                {currentStage === 1 && "Temukan gunung-gunung terbaik di Jawa Timur. Siapkan dirimu untuk menikmati panorama alam yang luar biasa dari setiap puncak."}
                                {currentStage === 2 && "Butuh pendamping? Kami menyediakan tour guide profesional yang siap menemani pendakian Anda"}
                                {currentStage === 3 && "Lihat rute perjalanan terbaik untuk menuju gunung dan informasi lengkap tentang gunung-gunung di Jawa Timur"}
                            </Animated.Text>
                        </View>
                        
                        <View className="gap-8">
                            <Animated.View style={[contentAnimatedStyle]}>
                                <CustomButton
                                    buttonHandling={nextStage}
                                    customStyle={`min-w-full z-10 ${currentStage === 3 ? 'bg-evergreen' : 'bg-soil'}`}
                                    title={currentStage === 3 ? "Login" : "Lanjut"}
                                />
                            </Animated.View>

                            <View className="flex-row justify-center gap-4 items-center">
                                <View className={`rounded-full h-3 w-3 ${currentStage === 1 ? 'bg-evergreen' : 'bg-thistle'}`} />
                                <View className={`rounded-full h-3 w-3 ${currentStage === 2 ? 'bg-evergreen' : 'bg-thistle'}`} />
                                <View className={`rounded-full h-3 w-3 ${currentStage === 3 ? 'bg-evergreen' : 'bg-thistle'}`} />
                            </View>
                        </View>
                    </View>
                </>
            ) : null}
        </SafeAreaView>
    );
};

export default TrialPageScreen;
