// TransactionList.js
import React from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";
import { router } from "expo-router";

const TransactionBerlangsung = ({
  tourGuideData = [],
  customerData = [],
  role,
}) => {
  const [show, setShow] = useState("terdekat");

  const dataToDisplay = role === "tourguide" ? tourGuideData : customerData;

  const filteredData = dataToDisplay.filter((data) => {
    if (show === "terdekat") return data.status === "UPCOMING";
    if (show === "pembayaran") return data.status === "WAITING_PAY";
    if (show === "approve") return data.status === "WAITING_APPROVE";
    return true;
  });

  return (
    <>
      <TransaksiSlideBerlangsung
        onFilterChange={setShow}
        titleSlide={"Proses Approve"}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
        {filteredData.map((item) => (
          <TourGuideCard
            key={item.id}
            guideName={item.guideName}
            mountainName={item.mountainName}
            hikingPoint={item.hikingPoint}
            numHikers={item.numHikers}
            numPorters={item.numPorters}
            numDays={item.numDays}
            dateRange={item.dateRange}
            price={item.price}
            imageUrl={item.imageUrl}
            status={item.status}
            onPressDetail={() => {
              if (item.status === "UPCOMING") {
                router.navigate("/transaction/transOnGoingUpcoming", {
                  params: { id: item.id },
                });
              } else if (item.status === "WAITING_PAY") {
                router.navigate("/transaction/transOnGoingPayment", {
                  params: { id: item.id },
                });
              } else if (item.status === "WAITING_APPROVE") {
                router.navigate("/transaction/transOnGoingApprove", {
                  params: { id: item.id },
                });
              } else {
                router.navigate("/transaction/transOnGoing", {
                  params: { id: item.id },
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
