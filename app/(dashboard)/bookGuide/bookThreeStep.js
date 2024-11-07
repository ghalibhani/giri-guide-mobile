import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CardKeteranganSewaTourGuide from "../../../components/bookingTourGuide/CardKeteranganSewaTourGuide";
import HeaderSewaTourGuide from "../../../components/bookingTourGuide/HeaderSewaTourGuide";
import DetailCalonPendaki from "../../../components/bookingTourGuide/DetailCalonPendaki";
import JasaPorter from "../../../components/bookingTourGuide/JasaPorter";
import CustomButton from "../../../components/miniComponent/CustomButton";
import ReviewPembayaran from "../../../components/bookingTourGuide/ReviewPembayaran";
import { useNavigation } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTourGuideById } from "../../../redux/tourGuideSlice";
import moment from "moment";

const SewaTourGuideTigaTahap = () => {
  const {tourGuideId, hikingPointId, hikingPointName, mountainName, tourGuideName, totalPorter, fixedHikerCount, startDate, endDate, mountainId} = useLocalSearchParams();

  console.log(`ini dari bookthreestep guide: tourGuideId= ${tourGuideId}, hikingPointId=${hikingPointId}, hikingPointName=${hikingPointName}, mountainName=${mountainName}, tourGuideName=${tourGuideName}, totalPorter=${totalPorter}, fixedMaxHiker=${fixedHikerCount}, startDate=${startDate}, endDate=${endDate}, mountainId=${mountainId}`)
  const startDateMoment = moment(startDate, "ddd MMM DD YYYY HH:mm:ss ZZ").toDate();
  const endDateMoment = moment(endDate, "ddd MMM DD YYYY HH:mm:ss ZZ").toDate();

  console.log(startDateMoment);
  console.log(endDateMoment);

  const dispatch = useDispatch()
  const tourGuide = useSelector((state) => state.tourGuide.tourGuide)
  const statusTourGuide = useSelector((state) => state.tourGuide.status)
  const errorTourGuide = useSelector((state) => state.tourGuide.error)

  const [catatanTourGuide, setCatatanTourGuide] = useState("");
  const [currentStage, setCurrentStage] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0)

  const [isModalConfirmationDataHikerVisible, setIsModalConfirmationDataHikerVisible] = useState(false)

  const [tourGuidePriceIncludeDays, setTourGuidePriceIncludeDays] = useState(0)
  const [additionalHikerCount, setAdditionalHikerCount] = useState(0)
  const [additionalPriceOnlyOneDay, setAdditionalPriceOnlyOneDay] = useState(0)
  const [additionalPriceTotal, setAdditionalPriceTotal] = useState(0)
  const [entranceFeeSingle, setEntranceFeeSingle] = useState(0)
  const [simaksiFeeSingle, setSimaksiFeeSingle] = useState(0)
  const [entranceFeeTotal, setEntranceFeeTotal] = useState(0)
  const [simaksiFeeTotal, setSimaksiFeeTotal] = useState(0)

  useEffect(() => {
    dispatch(fetchTourGuideById(tourGuideId))
  }, [dispatch, tourGuideId])

  const [hikerDetails, setHikerDetails] = useState(
    Array.from({ length: fixedHikerCount }, () => ({
      nik: "",
      fullName: "",
      birthDate: ""
    }))
  )

  const totalDays = Math.max(
    1,
    Math.ceil((new Date(endDateMoment) - new Date(startDateMoment)) / (1000 * 60 * 60 * 24)) + 1
  );
  
  useEffect(() => {
    if(tourGuide && tourGuide.price && tourGuide.additionalPrice) {
      const tourGuidePriceIncludeDays = tourGuide.price * totalDays
      setTourGuidePriceIncludeDays(tourGuidePriceIncludeDays)
      console.log(`totalDays ${totalDays}`)
      console.log(`tourGuidePriceIncludeDays, ${tourGuidePriceIncludeDays}`)

      const additionalHikerCount = fixedHikerCount > 5 ? fixedHikerCount - 5 : 0;
      setAdditionalHikerCount(additionalHikerCount)
      console.log( `additionalHikerCount ${additionalHikerCount}`)

      const additionalPriceOnlyOneDay = additionalHikerCount * tourGuide.additionalPrice;
      setAdditionalPriceOnlyOneDay(additionalPriceOnlyOneDay)
      console.log(`additionalHikerCount ${additionalHikerCount}`)

      const additionalPriceTotal = additionalHikerCount * tourGuide.additionalPrice * totalDays;
      setAdditionalPriceTotal(additionalPriceTotal)
      console.log(`additionalPriceTotal ${additionalPriceTotal}`)

      const entranceFeeSingle = tourGuide.mountains.find(
        (mountain) => mountain.mountainId === mountainId
      ).hikingPoints.find(
        (hikingPoint) => hikingPoint.id === hikingPointId
      ).price;
      setEntranceFeeSingle(entranceFeeSingle)
      console.log(`entranceFeeSingle ${entranceFeeSingle}`)

      const simaksiFeeSingle = tourGuide.mountains.find(
        (mountain) => mountain.mountainId === mountainId
      ).priceSimaksi
      setSimaksiFeeSingle(simaksiFeeSingle)
      console.log(`simaksiFeeSingle ${simaksiFeeSingle}`)

      const entranceFeeTotal = entranceFeeSingle * totalDays * fixedHikerCount
      setEntranceFeeTotal(entranceFeeTotal)
      console.log(`entranceFeeTotal ${entranceFeeTotal}`)

      const simaksiFeeTotal = simaksiFeeSingle * fixedHikerCount
      setSimaksiFeeTotal(simaksiFeeTotal)
      console.log(`simaksiFeeTotal ${simaksiFeeTotal}`)

      const total = tourGuidePriceIncludeDays + additionalPriceTotal + entranceFeeTotal + simaksiFeeTotal + otherFees + countPorter * tourGuide.pricePorter * totalDays;
      setTotalPrice(total);
      console.log(total)
    }
  }, [tourGuide, totalDays, fixedHikerCount, mountainId, hikingPointId])

  const otherFees = 20000

  const [countPorter, setCountPorter] = useState(0)

  const showModalConfirmationDataHiker = () => {
      setIsModalConfirmationDataHikerVisible(true)
  }

  const handleCancelCorfirmationDataHiker = () => {
      setIsModalConfirmationDataHikerVisible(false)
  }

  const tahapPorterHandler = async () => {
    try {
      setIsModalConfirmationDataHikerVisible(false)
      setCurrentStage(2);
    } catch (error) {
      console.error("Error in tahapPorterHandler:", error);
    }
  };

  const tahapReviewHandler = () => {
    try {
      setCurrentStage(3);
    } catch (error) {
      console.error("Error in tahapReviewHandler:", error);
    }
  };

  const tahapAjukanHandler = () => {
    try {
      router.replace("/detailGuide/detailGuide");
    } catch (error) {
      console.error("Error in tahapAjukanHandler:", error);
    }
  };

  const screenHeight = Dimensions.get('window').height
  const minHeightPercentage = 90
  const minHeight = (minHeightPercentage)

  return (
    <SafeAreaView className='bg-soil flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='ml-6 mt-5'>
        <HeaderSewaTourGuide />
      </View>

      <View className='flex-row gap-9 mt-8 mb-6 mx-6 justify-around px-5'>
        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 1
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>1</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 1 ? "text-daisy" : "text-ivory"
              }`}
            >
              Daftar
            </Text>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 1 ? "text-daisy" : "text-ivory"
              }`}
            >
              Pendaki
            </Text>
          </View>
        </View>

        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 2
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>2</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 2 ? "text-daisy" : "text-ivory"
              }`}
            >
              Porter
            </Text>
          </View>
        </View>

        <View className='gap-3 max-w-32 items-center'>
          <View
            className={`w-[45px] align-middle justify-center border-2 ${
              currentStage === 3
                ? "border-daisy bg-daisy"
                : "bg-ivory border-ivory"
            } px-4 py-2 rounded-full`}
          >
            <Text className='font-isemibold text-lg ml-[1] text-soil'>3</Text>
          </View>

          <View className='flex-col align-middle justify-center'>
            <Text
              className={`font-iregular text-center text-xs ${
                currentStage === 3 ? "text-daisy" : "text-ivory"
              }`}
            >
              Review
            </Text>
          </View>
        </View>
      </View>
      
        <ScrollView >
          <View className='ml-6 mr-6 mb-5'>
            <CardKeteranganSewaTourGuide 
              mountainName={mountainName}
              hikingPointName={hikingPointName}
              tourGuideName={tourGuideName}
            />
          </View>

          {currentStage === 1 && (
            <View className='flex-col flex-1  bg-grayCustom rounded-t-verylarge px-6 max-h-fit pb-16 pt-5'>
              <DetailCalonPendaki 
                continueHandling={tahapPorterHandler} 
                hikerDetails={hikerDetails}
                setHikerDetails={setHikerDetails}
                showModalConfirmationDataHiker={showModalConfirmationDataHiker}
                handleCancelCorfirmationDataHiker={handleCancelCorfirmationDataHiker}
                isModalConfirmationDataHikerVisible={isModalConfirmationDataHikerVisible}
              />
            </View>
          )}

          {currentStage === 2 && (
            <View className=' flex-col bg-grayCustom flex-1 rounded-t-verylarge'>
              <JasaPorter 
                continueHandling={tahapReviewHandler} 
                maxPorter={tourGuide.totalPorter}
                eachPorterPrice={tourGuide.pricePorter}
                countPorter={countPorter}
                tourGuidePriceEachDay={tourGuide.price}
                additionalPriceEachDayEachHiker={tourGuide.additionalPrice}
                setCountPorter={setCountPorter}
                fixedHikerCount={fixedHikerCount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                totalDays={totalDays}
                startDate={startDateMoment}
                endDate={endDateMoment}
              />
            </View>
          )}

          {currentStage === 3 && (
            <View className=' flex-col bg-grayCustom flex-1 rounded-t-verylarge'>
              <ReviewPembayaran
                days={totalDays}
                tourGuidePriceEachDay={tourGuide.price}
                tourGuidePriceTotal={tourGuidePriceIncludeDays}
                entranceFeeEachDay={entranceFeeSingle}
                entranceFeeTotal={entranceFeeTotal}
                simaksiPriceEachPerson={simaksiFeeSingle}
                simaksiPriceTotal={simaksiFeeTotal}
                additionalTourGuidePricePerDayPerPerson={tourGuide.additionalPrice}
                totalAdditionalTourGuidePricePerDayPerPerson={additionalPriceTotal}
                porterPricePerDayPerPerson={tourGuide.pricePorter}
                porterCount={countPorter}
                porterPriceTotal={tourGuide.pricePorter * countPorter * totalDays}
                totalPrice={totalPrice}
                adminCost={20000}
                isTourGuide={false}
                hikersCount={fixedHikerCount}
                hikerDetails={hikerDetails}
                isEditable={true}
                catatan={catatanTourGuide}
                setCatatan={setCatatanTourGuide}
              />
            </View>
          )}
        </ScrollView>
    </SafeAreaView>
  );
};

export default SewaTourGuideTigaTahap;

const styles = StyleSheet.create({});
