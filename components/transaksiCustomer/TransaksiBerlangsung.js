// TransactionList.js
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";
import { router } from "expo-router";

const TransactionBerlangsung = ({ tourGuideData }) => {
  const [show, setShow] = useState("terdekat");

  const filteredData = tourGuideData.filter((tourGuide) => {
    if (show === "terdekat") return tourGuide.status === "UPCOMING";
    if (show === "pembayaran") return tourGuide.status === "WAITING_PAY";
    if (show === "approve") return tourGuide.status === "WAITING_APPROVE";
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
            onPressDetail={() => {
              if (tourGuide.status === "UPCOMING") {
                router.navigate("/transaction/transOnGoingUpcoming", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              } else if (tourGuide.status === "WAITING_PAY") {
                router.navigate("/transaction/transOnGoingPayment", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              } else if (tourGuide.status === "WAITING_APPROVE") {
                router.navigate("/transaction/transOnGoingApprove", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              } else {
                router.navigate("/transaction/transOnGoing", {
                  params: {
                    tourGuideId: tourGuide.id,
                  },
                });
              }
            }}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TransactionBerlangsung;
