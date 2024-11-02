import { View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import CustomButton from "../miniComponent/CustomButton";
import TransaksiSlideSelesai from "./TransaksiSlideSelesai";
import { router } from "expo-router";
import Star from "../Star";

const TransaksiSelesai = ({ tourGuideData }) => {
  const [show, setShow] = useState("selesai");

  const filteredData = tourGuideData.filter((tourGuide) => {
    if (show === "selesai") return tourGuide.status === "DONE";
    if (show === "ditolak") return tourGuide.status === "REJECT";
    return true;
  });

  return (
    <>
      <TransaksiSlideSelesai onFilterChange={setShow} />
      <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
        {filteredData.map((tourGuide) => (
          <TourGuideCard
            key={tourGuide.id}
            guideName={tourGuide.guideName}
            mountainName={tourGuide.mountainName}
            hikingPoint={tourGuide.hikingPoint}
            numHikers={tourGuide.numHikers}
            numPorters={tourGuide.numPorters}
            numDays={tourGuide.numDays}
            dateRange={tourGuide.dateRange}
            price={tourGuide.price}
            imageUrl={tourGuide.imageUrl}
            onPressDetail={() => {
              if (tourGuide.status === "DONE") {
                router.navigate("/transaction/transDoneSuccess", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              } else if (tourGuide.status === "REJECT") {
                router.navigate("/transaction/transDoneRejected", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              } else {
                router.navigate("/transaction/transDoneSuccess", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              }
            }}
            customElements={
              tourGuide.status === "DONE" ? (
                <View>
                  <View className='my-5 h-[1] bg-borderCustom'></View>
                  {tourGuide.rating ? (
                    <View className='flex-row items-center justify-center gap-4'>
                      <Star star={tourGuide.rating} />
                    </View>
                  ) : (
                    <CustomButton
                      customStyle={"bg-soil min-w-full"}
                      title={"Berikan Rating"}
                      buttonHandling={() =>
                        router.push("/transaction/beriRating" + tourGuide.id)
                      }
                    />
                  )}
                </View>
              ) : null
            }
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TransaksiSelesai;
