import { ScrollView, StatusBar } from "react-native";
import OverFlowCarousel from "../../../components/OverFlowCarousel";
import HeaderHome from "../../../components/HeaderHome";
import SlideCarousel from "../../../components/SlideCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMountains } from "../../../redux/mountainSlice";

const HomeScreen = () => {
  const dispatch = useDispatch()
  const mountains = useSelector((state) => state.mountain.mountains)
  const statusMountains = useSelector((state) => state.mountain.status)
  const errorMountains = useSelector((state) => state.mountain.error)

  useEffect(() => {
    dispatch(fetchAllMountains({page: 1, size: 40}))
    // console.log(statusMountains)
  }, [dispatch])

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

  try {
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
        <ScrollView>
          <HeaderHome />
          <SlideCarousel data={data} />
          <OverFlowCarousel
            data={mountains}
            title={"Jelajahi Gunung di Jawa Timur"}
            continueToAllLists={"/home/allMountainCards"}
          />
          <OverFlowCarousel
            data={data}
            title={"Rute Perjalanan ke Destinasi"}
            withDescription={true}
            route="/home/poinOfInterest"
          />
          {/* <OverFlowCarousel
                data={data}
                title={"Pengalaman pendaki lain"}
                withDescription={true}
              /> */}
        </ScrollView>
      </SafeAreaView>
    );
  } catch (error) {
    console.error("Error rendering HomeScreen:", error);
  }
};

export default HomeScreen;
