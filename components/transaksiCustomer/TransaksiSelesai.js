import { View, ScrollView,Text } from "react-native";
import React, { memo } from "react";
import { useState } from "react";
import TourGuideCard from "./TourGuideCard";
import CustomButton from "../miniComponent/CustomButton";
import TransaksiSlideSelesai from "./TransaksiSlideSelesai";
import { router } from "expo-router";
import Star from "../Star";
import CustomNotFound from "../miniComponent/CustomNotFound";
import { remapProps } from "nativewind";

const TransaksiSelesai = ({ tourGuideData = [], customerData = [], role }) => {
  // console.log("ini dari transaksi selesai: ", tourGuideData)
  const [show, setShow] = useState("selesai");

  const filteredData = tourGuideData?.filter((tourGuide) => {
    if (show === "selesai") return tourGuide.transactionStatus === "DONE";
    if (show === "ditolak") return tourGuide.transactionStatus === "REJECTED";
    return true;
  }) || [];
  // console.log(filteredData.length)

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
              customerName={tourGuide.customerName}
              mountainName={tourGuide.mountainName}
              hikingPoint={tourGuide.hikingPointName}
              numHikers={tourGuide.hikerQty}
              numPorters={tourGuide.porter}
              numDays={tourGuide.days}
              startDate={tourGuide.startDate}
              endDate={tourGuide.endDate}
              price={formatRupiah(tourGuide.totalPrice)}
              imageUrl={role === 'ROLE_GUIDE' ? tourGuide.customerImage : tourGuide.tourGuideImage}
              status={tourGuide.transactionStatus}
              role={role}
              onPressDetail={() => {
                if (tourGuide.transactionStatus === "DONE" && role === "ROLE_CUSTOMER") {
                  router.push(`/transaction/transDoneSuccess?id=${tourGuide.id}`);
                } else if (tourGuide.transactionStatus === "REJECTED" && role === "ROLE_CUSTOMER") {
                  router.push(`/transaction/transDoneRejected?id=${tourGuide.id}`);
                } 

                else if (tourGuide.transactionStatus === "DONE" && role === "ROLE_GUIDE") {
                  router.push(`/transaction-tourguide/transDoneSuccess?id=${tourGuide.id}`);
                } else if (tourGuide.transactionStatus === "REJECTED" && role === "ROLE_GUIDE") {
                  router.push(`/transaction-tourguide/transDoneRejected?id=${tourGuide.id}`);
                } 
              }}
              customElements={
                tourGuide.transactionStatus === "DONE" ? (
                  <View>
                    <View className='my-5 h-[1] bg-borderCustom'></View>
                    {tourGuide.review.review !== null ? (
                      <View className='flex-row items-center justify-center gap-4'>
                        <Star star={tourGuide.review.rating} />
                      </View>
                    ) : role === "ROLE_CUSTOMER"
                    ? (
                      <CustomButton
                        customStyle={"bg-soil min-w-full"}
                        title={"Berikan Rating"}
                        buttonHandling={() =>
                          router.push(`/transaction/beriRating?transactionId=${tourGuide.id}&tourGuideId=${tourGuide.tourGuideId}`)
                        }
                      />
                    ) : (
                      <Text className="text-center text-base font-isemibold text-soil">Belum ada rating dari customer</Text>
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
