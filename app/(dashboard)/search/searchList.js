import { Animated, Image, StatusBar, View } from "react-native";
import HeaderSearching from "../../../components/HeaderSearching";
import TourGuideSearchedList from "../../../components/TourGuideSearchedList";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { getTourGuideListsByHikingPointId } from "../../../redux/tourGuideSlice";
import CustomNotFound from "../../../components/miniComponent/CustomNotFound";
const SearchListScreen = () => {
  const {hikingPointId, hikingPointName, mountainName} = useLocalSearchParams()
  
  const dispatch = useDispatch()
  const tourGuideLists = useSelector((state) => state.tourGuide.tourGuides)
  const statusTourGuideLists = useSelector((state) => state.tourGuide.status)
  const errorTourGuideLists = useSelector((state) => state.tourGuide.error)

  const [loading, setLoading] = useState(true)
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  useEffect(() => {
    if(hikingPointId) {
      dispatch(getTourGuideListsByHikingPointId({hikingPointId, page: 1, size: 40}))
    }

    const loadingTimeout = setTimeout(() => setLoading(false), 1000)

    return () => clearTimeout(loadingTimeout)
  }, [dispatch, hikingPointId])

  useEffect(() => {
    if (!loading && statusTourGuideLists === "succeed"){
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start()
    }
  }, [loading, statusTourGuideLists, fadeAnim   ])


  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  // const handleScroll = (event) => {
  //   const { nativeEvent } = event;
  //   const { contentOffset } = nativeEvent;
  //   const { y } = contentOffset;
  //   if (y > 100) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  // };
  if (loading || statusTourGuideLists === "loading") {
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
    <SafeAreaView>
      <StatusBar
        backgroundColor="#503a3a"
        barStyle={statusBarStyle}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />
      <HeaderSearching 
        choosenHikingPoint={hikingPointName}
        choosenMountain={mountainName}
      />
      {tourGuideLists.length !== 0 && <TourGuideSearchedList tourGuides={tourGuideLists} />}
      {tourGuideLists.length === 0 && <CustomNotFound title={"Belum ada tour guide yang tersedia"}/>}
    </SafeAreaView>
    </Animated.View>
  );
};

export default SearchListScreen;
