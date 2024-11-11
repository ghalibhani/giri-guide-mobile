import { Image, ScrollView, StatusBar, View } from "react-native";
import OverFlowCarousel from "../../../components/OverFlowCarousel";
import HeaderHome from "../../../components/HeaderHome";
import SlideCarousel from "../../../components/SlideCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRefresh } from "../../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMountains } from "../../../redux/mountainSlice";
import { fetchProfileCustomer } from "../../../redux/profileSlice";
import { fetchAllRoutes } from "../../../redux/routesSlice";

const HomeMainCustomerScreen = () => {
  const dispatch = useDispatch();
  const mountains = useSelector((state) => state.mountain.mountains);
  const statusMountains = useSelector((state) => state.mountain.status);
  const errorMountains = useSelector((state) => state.mountain.error);

  const travelRoutes = useSelector((state) => state.travelRoute.travelRoutes);
  const statusTravelRoutes= useSelector((state) => state.travelRoute.status);
  const errorTravelRoutes = useSelector((state) => state.travelRoute.error);

  const [loading, setLoading] = useState(true)

  const userId = useSelector((state) => state.auth.userId);
  const profile = useSelector((state) => state.profile);

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  const handleScroll = (event) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    if (y > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  useEffect(() => {
    dispatch(fetchProfileCustomer(userId));
    // console.log(profile);
  }, [dispatch, userId]);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem("token");
  //       const role = await AsyncStorage.getItem("userRole");
  //       const userId = await AsyncStorage.getItem("userId");
  //       const email = await AsyncStorage.getItem("email");
  //       const name = await AsyncStorage.getItem("guideName");

  //       if (token === null) {
  //         router.replace("/login");
  //       } else if (role === "ROLE_GUIDE") {
  //         // console.log("role checking", role);
  //         // console.log("token checking", token);
  //         // console.log("userId checking", userId);
  //         router.replace("/homeGuide/homeMainTourGuide");
  //         dispatch(loginRefresh({ token, role, userId, email, name }));
  //       } else {
  //         dispatch(loginRefresh({ token, role, userId, email, name }));
  //       }
  //     } catch (error) {
  //       router.replace("/login");
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  useEffect(() => {
    dispatch(fetchAllMountains({ page: 1, size: 40 }));
    dispatch(fetchAllRoutes({page: 1, size: 40}))
    // console.log(statusMountains)
  }, [dispatch]);

  useEffect(() => {
    if(statusMountains === "succeed" && statusTravelRoutes === "succeed"){
      setLoading(false)
    }
  }, [statusMountains, statusTravelRoutes])

  if (loading || statusMountains === "loading" || statusTravelRoutes === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  const data = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://kilasjatim.com/wp-content/uploads/2024/08/gunung-semeru-2_43.jpeg",
      description: "Description 1",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://public.urbanasia.com/images/post/2020/12/30/1609305585-semeru-(2).JPG",
      description: "Description 2",
    },
    {
      id: 3,
      text: "Item 3",
      image:
        "https://media.istockphoto.com/id/1704122116/photo/tumpak-sewu-waterfall-and-semeru-mountain-at-sunrise-indonesia.jpg?s=612x612&w=0&k=20&c=xP5f_2u3bmLVi2G7GapeDjIspgc-Dr7e3BAYCpm9BxI=",
      description: "Description 3",
    },
    {
      id: 4,
      text: "Item 4",
      image:
        "https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybridhttps://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid",
      description: "Description 4",
    },
    {
      id: 5,
      text: "Item 5",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01grbwb5aav5vt1g5bpjg627fw.jpg",
      description: "Description 5",
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor='#503a3a'
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
        style='light'
      />
      {/* <Link href={'/home/mountainDetail'}>loncat</Link> */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <HeaderHome fullName={profile.fullName} />
        <SlideCarousel data={data} />
        <OverFlowCarousel
          data={mountains}
          title={"Jelajahi Gunung di Jawa Timur"}
          continueToAllLists={"/home/allMountainCards"}
        />
        <OverFlowCarousel
          data={travelRoutes}
          additionalImage={data}
          title={"Rute Perjalanan ke Destinasi"}
          withDescription={true}
          continueToAllLists={"/home/allRoutesCards"}
        />
        {/* <OverFlowCarousel
              data={data}
              title={"Pengalaman pendaki lain"}
              withDescription={true}
            /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeMainCustomerScreen;
