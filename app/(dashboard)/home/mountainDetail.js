import { Animated, Image, View } from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import MountainStatus from "../../../components/MountainStatus";
import Thumbnail from "../../../components/Thumbnail";
import MountainRating from "../../../components/MountainRating";
import Description from "../../../components/Description";
import HikingTips from "../../../components/HikingTips";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMountainById } from "../../../redux/mountainSlice";
import BestTimeForHiking from "../../../components/miniComponent/BestTimeForHiking";
import { useFocusEffect } from "@react-navigation/native";

const mountainDetail = () => {
  const dispatch = useDispatch()
  const {id} = useLocalSearchParams()
  console.log(id)

  const mountainData = useSelector((state) => state.mountain.mountain)
  const statusMountain = useSelector((state) => state.mountain.status)
  const errorMountain = useSelector((state) => state.mountain.error)

  const [loading, setLoading] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  const [hikingPointIdForSearching, setHikingPointIdForSearching] = useState('');
  const [hikingPointNameForSearching, setHikingPointNameForSearching] = useState('');

  useEffect(() => {
    if (id) {
      dispatch(getMountainById(id));
    }
    const loadingTimeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(loadingTimeout);
  }, [dispatch, id]);

  useEffect(() => {
    if (!loading && statusMountain === "succeed") {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [loading, statusMountain]);

  useFocusEffect(
    useCallback(() => {
      setHikingPointIdForSearching('');
      setHikingPointNameForSearching('');

      return () => {
        setHikingPointIdForSearching('');
        setHikingPointNameForSearching('');
      };
    }, [])
  );

  const handlePressOnHikingPoint = (hikingPointId, hikingPointName) => {
    // console.log("Hiking point button pressed! ID:", hikingPointId, "Name:", hikingPointName);
    setHikingPointIdForSearching(hikingPointId)
    setHikingPointNameForSearching(hikingPointName)
  }

  useEffect(() => {
    if (hikingPointIdForSearching && hikingPointNameForSearching) {
      // console.log('Updated hikingPointId and hikingPointName:', hikingPointIdForSearching, hikingPointNameForSearching);
    }
  }, [hikingPointIdForSearching, hikingPointNameForSearching]);

  const findTourGuideHandler = () => {
    if (hikingPointIdForSearching) {
      // console.log("Navigating to:", `/search/searchList?hikingPointId=${hikingPointIdForSearching}&hikingPointName=${hikingPointNameForSearching}&mountainName=${mountainData.name}`);
      router.push(`/search/searchList?hikingPointId=${hikingPointIdForSearching}&hikingPointName=${hikingPointNameForSearching}&mountainName=${mountainData.name}&mountainId=${id}`);
    } else if(id){
      // console.log("Hiking point ID not set");
      router.push(`/search/search?mountainId=${id}`)
    }
  }

  if (loading || statusMountain === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
    <HeaderComponent
      text={mountainData.name}
      withFixedButton={true}
      linkFixedButton={"/search/search"}
      mountainStatus={mountainData.status}
      hikingPoint={mountainData.hikingPoints}
      findTourGuideHandler={findTourGuideHandler}
      >
      <View className="px-6 bg-[#f8f8f8]">
        <MountainStatus status={mountainData.status} />
        <Thumbnail
          image={
            mountainData.image
          }
        />
        <MountainRating
          star={4.5}
          totalRating={100}
          isBookmark={true}
          pointOfInterest={mountainData.hikingPoints}
          price={mountainData.priceSimaksi}
          theBestDuration={mountainData.bestTime}
          handlePressOnHikingPoint={handlePressOnHikingPoint}
          city={mountainData.city}
        />
        <Description data={mountainData.description}  />
        {mountainData.bestTime && <BestTimeForHiking data={mountainData.bestTime}/>}
        <HikingTips withFixedButton={true} dataHikingTips={mountainData.tips}/>
      </View>
    </HeaderComponent>
    </Animated.View>
  );
};

export default mountainDetail;
