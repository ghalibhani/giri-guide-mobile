import { View, ScrollView } from "react-native";
import React, { memo } from "react";
import { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import CustomButton from "../miniComponent/CustomButton";
import TransaksiSlideSelesai from "./TransaksiSlideSelesai";
import { router } from "expo-router";
import Star from "../Star";
import CustomNotFound from "../miniComponent/CustomNotFound";

const TransaksiSelesai = ({ tourGuideData }) => {
  console.log("ini dari transaksi selesai: ", tourGuideData)
  const [show, setShow] = useState("selesai");

  const filteredData = tourGuideData?.filter((tourGuide) => {
    if (show === "selesai") return tourGuide.transactionStatus === "DONE";
    if (show === "ditolak") return tourGuide.transactionStatus === "REJECTED";
    return true;
  }) || [];
  console.log(filteredData.length)

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
      <TransaksiSlideSelesai onFilterChange={setShow} />

      {filteredData.length > 0 ? (
        <ScrollView contentContainerStyle={{ paddingBottom: 265 }}>
          {filteredData.map((tourGuide) => (
            <TourGuideCard
              key={tourGuide.id}
              guideName={tourGuide.tourGuideName}
              mountainName={tourGuide.mountainName}
              hikingPoint={tourGuide.hikingPointName}
              numHikers={tourGuide.hikerQty}
              numPorters={tourGuide.porter}
              numDays={tourGuide.days}
              startDate={tourGuide.startDate}
              endDate={tourGuide.endDate}
              price={formatRupiah(tourGuide.totalPrice)}
              imageUrl={tourGuide.tourGuideImage}
              status={tourGuide.transactionStatus}
              onPressDetail={() => {
                if (tourGuide.transactionStatus === "DONE") {
                  router.push(`/transaction/transDoneSuccess?id=${tourGuide.id}`);
                } else if (tourGuide.transactionStatus === "REJECTED") {
                  router.push(`/transaction/transDoneRejected?id=${tourGuide.id}`);
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
      ) : (
        <CustomNotFound title={`Belum ada transaksi untuk status ${show}`} customStyle={"mt-0"} />
      )}
      
    </>
  );
};

export default memo(TransaksiSelesai);
