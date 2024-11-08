import React, { memo, useState } from "react";
import { ScrollView } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";
import { router } from "expo-router";
import CustomNotFound from "../miniComponent/CustomNotFound";

const TransactionBerlangsung = ({
  tourGuideData = [],
  customerData = [],
  role,
}) => {
  const [show, setShow] = useState("terdekat");

  const dataToDisplay = role === "ROLE_GUIDE" ? tourGuideData : customerData;

  console.log("----------", dataToDisplay);

  const filteredData = dataToDisplay.filter((data) => {
    if (show === "terdekat") return data.transactionStatus === "UPCOMING";
    if (show === "pembayaran") return data.transactionStatus === "WAITING_PAY";
    if (show === "approve") return data.transactionStatus === "WAITING_APPROVE";
    return true;
  });

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <TransaksiSlideBerlangsung
        onFilterChange={setShow}
        titleSlide={"Proses Approve"}
      />

      {filteredData.length !== 0 && (
        <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
          {filteredData.map((item) => (
            <TourGuideCard
              key={item.id}
              guideName={item.tourGuideName}
              mountainName={item.mountainName}
              hikingPoint={item.hikingPointName}
              numHikers={item.hikerQty}
              numPorters={item.porter}
              numDays={item.days}
              startDate={item.startDate}
              endDate={item.endDate}
              price={formatRupiah(item.totalPrice)}
              imageUrl={item.tourGuideImage}
              status={item.transactionStatus}
              onPressDetail={() => {
                if (item.transactionStatus === "UPCOMING") {
                  router.push(
                    `/transaction/transOnGoingUpcoming?id=${item.id}`
                  );
                } else if (item.transactionStatus === "WAITING_PAY") {
                  router.push(`/transaction/transOnGoingPayment?id=${item.id}`);
                } else if (item.transactionStatus === "WAITING_APPROVE") {
                  router.push(`/transaction/transOnGoingApprove?id=${item.id}`);
                }
              }}
            />
          ))}
        </ScrollView>
      )}

      {filteredData.length === 0 && (
        <CustomNotFound
          title={`Belum ada transaksi untuk status ${show}`}
          customStyle={"mt-0"}
        />
      )}
    </>
  );
};

export default memo(TransactionBerlangsung);
