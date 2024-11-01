// TransactionList.js
import React from "react";
import { ScrollView } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";

const TransactionBerlangsung = ({ tourGuideData }) => {
  return (
    <>
      <TransaksiSlideBerlangsung />
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
            onPressDetail={() =>
              console.log(`Lihat detail ${tourGuide.guideName}`)
            }
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TransactionBerlangsung;
