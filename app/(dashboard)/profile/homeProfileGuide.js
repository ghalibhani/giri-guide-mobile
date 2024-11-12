import { View, StatusBar, ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionHeader from "../../../components/transaksiCustomer/TransactionHeader";
import CardProfile from "../../../components/profileTourGuide/CardProfile";
import ShortDescription from "../../../components/profileTourGuide/ShortDescription";
import CardRatingReview from "../../../components/profileTourGuide/CardRatingReview";
import SubMenuProfileTourGuide from "../../../components/profileTourGuide/SubMenuProfileTourGuide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTourGuideProfileByUserId } from "../../../redux/tourGuideSlice";
import { fetchTourGuideReview } from "../../../redux/guideReviewSlice";

const HomeProfileGuideScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchTourGuideProfileByUserId(userId));
    dispatch(fetchTourGuideReview(tourGuideProfileData.tourGuideId)).finally(
      () => setRefreshing(false)
    );
  };

  const tourGuideProfileData = useSelector(
    (state) => state.tourGuide.tourGuide
  );
  const reviews = useSelector((state) => state.tourGuideReview.reviews.data);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTourGuideProfileByUserId(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (tourGuideProfileData && tourGuideProfileData.tourGuideId) {
      dispatch(fetchTourGuideReview({ id: tourGuideProfileData.tourGuideId }));
    }
  }, [tourGuideProfileData, dispatch]);

  console.log("tourGuideProfileData--------------", tourGuideProfileData);

  const highestRatedReview =
    reviews && reviews.length > 0
      ? reviews.reduce((prev, current) => {
          return prev.rating > current.rating ? prev : current;
        }, reviews[0])
      : null;

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />
      <View className='gap-5 bg-grayCustom flex-1'>
        <TransactionHeader titleHeader='Profile' />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View className='gap-1'>
            <View className='gap-5'>
              <CardProfile data={tourGuideProfileData} />
              <ShortDescription data={tourGuideProfileData} />
            </View>

            <CardRatingReview
              data={highestRatedReview}
              averageData={tourGuideProfileData}
              show={false}
              role={"ROLE_GUIDE"}
            />

            <SubMenuProfileTourGuide />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeProfileGuideScreen;
