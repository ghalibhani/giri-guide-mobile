import { ScrollView, StatusBar } from "react-native";
import OverFlowCarousel from "../../../components/OverFlowCarousel";
import HeaderHome from "../../../components/HeaderHome";
import SlideCarousel from "../../../components/SlideCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 1",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 2",
    },
    {
      id: 3,
      text: "Item 3",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 3",
    },
    {
      id: 4,
      text: "Item 4",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 4",
    },
    {
      id: 5,
      text: "Item 5",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 5",
    },
    {
      id: 6,
      text: "Item 6",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 6",
    },
    {
      id: 7,
      text: "Item 7",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 7",
    },
    {
      id: 8,
      text: "Item 8",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 8",
    },
    {
      id: 9,
      text: "Item 9",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 9",
    },
    {
      id: 10,
      text: "Item 10",
      image:
        "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380",
      description: "Description 10",
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
        <ScrollView>
          <HeaderHome />
          <SlideCarousel data={data} />
          <OverFlowCarousel
            data={data}
            title={"Jelajahi Gunung di Jawa Timur"}
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
