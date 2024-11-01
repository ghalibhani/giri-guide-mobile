import { View, ScrollView } from "react-native";
import React from "react";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideSelesai";
import CustomButton from "../miniComponent/CustomButton";

const TransaksiSelesai = ({ tourGuideData }) => {
  return (
    <>
      <TransaksiSlideBerlangsung></TransaksiSlideBerlangsung>
      <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
        {tourGuideData.map((tourGuide) => (
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
                <CustomButton title='Beri Sekarang' customStyle='bg-soil' />
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
