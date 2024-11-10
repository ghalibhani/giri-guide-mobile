import React, { memo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import TourGuideCard from "./TourGuideCard";
import TransaksiSlideBerlangsung from "./TransaksiSlideBerlangsung";
import { router } from "expo-router";
import CustomNotFound from "../miniComponent/CustomNotFound";
import CustomButton from "../miniComponent/CustomButton";
import { useDispatch } from "react-redux";
import { updatingTransactionStatus } from "../../redux/transactionSlice";
import CustomModalConfirmation from "../miniComponent/CustomModalConfirmation";
import CustomModalSuccess from "../miniComponent/CustomModalSuccess";

const TransactionBerlangsung = ({
  tourGuideData = [],
  customerData = [],
  role,
  onTransactionComplete,
}) => {
  const [show, setShow] = useState("terdekat");

  const dataToDisplay = role === "ROLE_GUIDE" ? tourGuideData : customerData;

  const dispatch = useDispatch()

  const filteredData = dataToDisplay.filter((data) => {
    if (show === "terdekat") return data.transactionStatus === "UPCOMING";
    if (show === "pembayaran") return data.transactionStatus === "WAITING_PAY";
    if (show === "approve") return data.transactionStatus === "WAITING_APPROVE";
    return true;
  });

  const [isModalConfirmationVisible, setIsModalConfirmationVisible] = useState(false)
  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false)
  const [fixedTransactionId, setFixedTransactionId] = useState('')

  const showModalConfirmation = (id) => {
    setFixedTransactionId(id)
    setIsModalConfirmationVisible(true)
  }

  const handleCancelCorfirmation = () => {
    setFixedTransactionId('')
    setIsModalConfirmationVisible(false)
  }

  const handleDone = () => {
    setFixedTransactionId('')
    setIsModalSuccessVisible(false)
    if (onTransactionComplete) {
      onTransactionComplete(); 
    }
  }

  const handleCompleteTransaction = async() => {
    try {
      const dataBody = {
        status: "done",
      }
      await dispatch(updatingTransactionStatus({dataBody, transactionId: fixedTransactionId})).unwrap()
      setIsModalConfirmationVisible(false)
      setIsModalSuccessVisible(true)
      setFixedTransactionId('')
    } catch (error) {
      console.error("Error in transaksi berlangsung for customer: ", error)
    }
  }

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const isSameDate = (date1, date2) => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };
  // console.log(isSameDate(timeNow, timeNow))

  const timeNow = new Date()

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
              customerName={item.customerName}
              mountainName={item.mountainName}
              hikingPoint={item.hikingPointName}
              numHikers={item.hikerQty}
              numPorters={item.porter}
              numDays={item.days}
              startDate={item.startDate}
              endDate={item.endDate}
              price={formatRupiah(item.totalPrice)}
              imageUrl={role === 'ROLE_GUIDE' ? item.customerImage : item.tourGuideImage}
              status={item.transactionStatus}
              role={role}
              onPressDetail={() => {
                if (item.transactionStatus === "UPCOMING" && role === "ROLE_CUSTOMER") {
                  router.push(
                    `/transaction/transOnGoingUpcoming?id=${item.id}`
                  );
                } else if (item.transactionStatus === "WAITING_PAY" && role === "ROLE_CUSTOMER") {
                  router.push(`/transaction/transOnGoingPayment?id=${item.id}`);
                } else if (item.transactionStatus === "WAITING_APPROVE" && role === "ROLE_CUSTOMER") {
                  router.push(`/transaction/transOnGoingApprove?id=${item.id}`);
                } 
                
                else if (item.transactionStatus === "UPCOMING" && role === "ROLE_GUIDE") {
                  router.push(
                    `/transaction-tourguide/transOnGoingUpcoming?id=${item.id}`
                  );
                } else if (item.transactionStatus === "WAITING_PAY" && role === "ROLE_GUIDE") {
                  router.push(`/transaction-tourguide/transOnGoingPayment?id=${item.id}`);
                } else if (item.transactionStatus === "WAITING_APPROVE" && role === "ROLE_GUIDE") {
                  router.push(`/transaction-tourguide/transOnGoingApprove?id=${item.id}`);
                }
              }}
              customElements={
                item.transactionStatus === "UPCOMING" ? (
                  <View>
                    {isSameDate(item.startDate, timeNow) && role === 'ROLE_CUSTOMER' &&
                      <>
                        <View className='my-5 h-[1] bg-borderCustom'></View>
                        <CustomButton
                          customStyle={"bg-soil min-w-full"}
                          title={"Selesaikan transaksi pendakian ini"}
                          buttonHandling={() => showModalConfirmation(item.id)}
                        />
                      </>
                    }
                  </View>
                ) : null
              }
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

      <CustomModalConfirmation isModalVisible={isModalConfirmationVisible} handleCancel={handleCancelCorfirmation} handleConfirm={handleCompleteTransaction}>
          <Text className="text-base mb-4 font-iregular text-evergreen text-center">
              Apakah Anda yakin menyelesaikan transaksi pendakian ini? Jika ya, Anda tidak dapat mengubahnya lagi dan jasa tour guide akan diserahkan
          </Text>
      </CustomModalConfirmation>

      <CustomModalSuccess isModalVisible={isModalSuccessVisible} handleDone={handleDone}>
          <Text className="text-base mb-4 font-iregular text-evergreen text-center">
              Yeay! Kamu sudah menyelesaikan pendakian ini! Kami harap kamu telah merasakan pengalaman pendakian terindah
          </Text>
      </CustomModalSuccess>
    </>
  );
};

export default memo(TransactionBerlangsung);
