import { View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import CustomButton from "../miniComponent/CustomButton";
import TransaksiSlideSelesai from "./TransaksiSlideSelesai";

const TransaksiSelesai = ({ tourGuideData }) => {
  const [show, setShow] = useState("selesai");

  const filteredData = tourGuideData.filter((tourGuide) => {
    if (show === "selesai") return tourGuide.status === "DONEHIKING";
    if (show === "ditolak") return tourGuide.status === "DONEREJECT";
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
            buttonRating={
              <>
                <View className='flex-row my-5 h-[1] bg-borderCustom'></View>
                <CustomButton title='Beri Rating' customStyle='bg-soil' />
              </>
            }
            onPressDetail={() =>
              console.log(`Lihat detail ${tourGuide.guideName}`)
            }
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TransaksiSelesai;
