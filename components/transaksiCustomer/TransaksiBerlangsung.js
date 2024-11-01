// TransactionList.js
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";

const TransactionBerlangsung = ({ tourGuideData }) => {
  const [show, setShow] = useState("terdekat");

  const filteredData = tourGuideData.filter((tourGuide) => {
    if (show === "terdekat") return tourGuide.status === "ONNEARBY";
    if (show === "pembayaran") return tourGuide.status === "ONWAITINGPAY";
    if (show === "approve") return tourGuide.status === "ONAPPROVE";
    return true;
  });

  return (
    <>
      <TransaksiSlideBerlangsung onFilterChange={setShow} />
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
            status={tourGuide.status}
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
