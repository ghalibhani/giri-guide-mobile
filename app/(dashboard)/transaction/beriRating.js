import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import { SafeAreaView } from "react-native-safe-area-context";
import RatingTourGuideCard from "../../../components/transaksiCustomer/RatingTourGuideCard";
import CatatanUntukTourGuide from "../../../components/miniComponent/CatatanUntukTourGuide";
import CustomButton from "../../../components/miniComponent/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTourGuideById } from "../../../redux/tourGuideSlice";
import { giveRatingForDoneTransaction } from "../../../redux/transactionSlice";
import CustomModalSuccess from "../../../components/miniComponent/CustomModalSuccess";

export default function beriRating() {
  const { transactionId, tourGuideId } = useLocalSearchParams();
  // console.log(`ini dari beri rating: transactionId: ${transactionId} tourGuideId: ${tourGuideId}`)

  const dispatch = useDispatch();
  const tourGuide = useSelector((state) => state.tourGuide.tourGuide);
  const statusTourGuide = useSelector((state) => state.tourGuide.status);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const isReviewValid = review.length >= 5 && review.length <= 150;
  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTourGuideById(tourGuideId));
    // console.log(`tourguide dari beri rating: ${tourGuide.rating}`)
  }, [dispatch, tourGuideId]);

  const handleDone = () => {
    setIsModalSuccessVisible(false);
    router.replace("/transaction");
  };

  const showModalSuccess = () => {
    setIsModalSuccessVisible(true);
  };

  const continueHandling = async () => {
    try {
      const dataRating = {
        rating: rating,
        review: review,
      };

      // console.log('ini data rating: ', dataRating)
      await dispatch(
        giveRatingForDoneTransaction({
          dataRating,
          transactionId: transactionId,
        })
      ).unwrap();
      setReview("");
      setRating(0);
      setIsModalSuccessVisible(true);
    } catch (error) {
      console.error("Error in beriRating: ", error);
    }
  };

  if (statusTourGuide === "loading") {
    return (
      <View className='flex-1 items-center justify-center bg-white'>
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView className='flex-1 bg-grayCustom'>
      <StatusBar barStyle='light-content' backgroundColor='#503A3A' />
      <View className='bg-soil pb-7 rounded-b-verylarge mb-5'>
        <HeaderSubMenu title={"Beri Rating"} />
      </View>

      <RatingTourGuideCard
        guideName={tourGuide.name}
        guideImage={tourGuide.image}
        giveRating={rating}
        setGiveRating={setRating}
        guideReviewCount={tourGuide.totalReview}
        guideRating={tourGuide.rating}
      />

      <CatatanUntukTourGuide
        title={"Ceritakan pengalamanmu dipandu tour guide ini"}
        catatan={review}
        setCatatan={setReview}
        isEditable={true}
      />

      <CustomButton
        title={"Kirim ulasanmu"}
        customStyle={`mx-6 mt-6 ${isReviewValid ? "bg-soil" : "bg-gray-300"}`}
        buttonHandling={continueHandling}
        isDisabled={!isReviewValid}
      />

      <CustomModalSuccess
        isModalVisible={isModalSuccessVisible}
        handleDone={handleDone}
      >
        <Text className='text-base mb-4 font-iregular text-evergreen text-center'>
          Yeay! Terima kasih telah memberikan ulasan kepada kami
        </Text>
      </CustomModalSuccess>
    </SafeAreaView>
  );
}
