import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import ReviewGuideCard from "../../../components/ReviewGuideCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListReviewGuideScreen() {
  const reviews = [
    {
      id: "1",
      reviewerName: "Nama reviewer 1",
      date: "19 Okt 2024",
      usePorter: true,
      reviewText:
        "Tour guide akan memandu Anda di titik pendakian pilihan, memberikan rute yang aman dan tips mendaki...",
      rating: 1,
      imageUser:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/727f/live/dcee9e00-e51a-11ee-8cb3-4bf196fb1b9a.jpg",
    },
    {
      id: "2",
      reviewerName: "Nama reviewer 2",
      date: "20 Okt 2024",
      usePorter: false,
      reviewText:
        "Pengalaman mendaki yang menyenangkan dengan panduan lengkap...",
      rating: 5,
      imageUser:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/727f/live/dcee9e00-e51a-11ee-8cb3-4bf196fb1b9a.jpg",
    },
    {
      id: "3",
      reviewerName: "Nama reviewer 2",
      date: "20 Okt 2024",
      usePorter: false,
      reviewText:
        "Pengalaman mendaki yang menyenangkan dengan panduan lengkap...",
      rating: 5,
    },
  ];

  return (
    <ScrollView className='flex-1' style={{ backgroundColor: "#f8f8f8" }}>
      <SafeAreaView>
        {/* Header */}
        <Text className='text-3xl text-center mt-5 text-soil font-ibold'>
          Ulasan (311)
        </Text>
        <TouchableOpacity className='bg-ivory w-[30] h-[30] border border-soil absolute top-10 left-6 z-10 items-center justify-center rounded-full'>
          <View className='justify-center items-center'>
            <Ionicons name={"chevron-back"} size={15} color={"#503A3A"} />
          </View>
        </TouchableOpacity>

        {/* list */}
        <View>
          {reviews.map((review) => (
            <ReviewGuideCard
              key={review.id}
              reviewerName={review.reviewerName}
              date={review.date}
              usePorter={review.usePorter}
              reviewText={review.reviewText}
              rating={review.rating}
              imageUser={review.imageUser}
            />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
