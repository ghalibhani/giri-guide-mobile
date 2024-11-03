import { StatusBar } from "react-native";
import HeaderSearching from "../../../components/HeaderSearching";
import TourGuideSearchedList from "../../../components/TourGuideSearchedList";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const SearchListScreen = () => {
  const tourGuides = [
    {
      id: 1,
      name: "Rafi",
      image: "https://picsum.photos/id/1015/200/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      rating: 4.5,
      totalRating: 100,
    },
    {
      id: 2,
      name: "Rio",
      image: "https://picsum.photos/id/1016/200/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      rating: 4.2,
      totalRating: 50,
    },
    {
      id: 3,
      name: "Rafi",
      image: "https://picsum.photos/id/1015/200/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      rating: 4.5,
      totalRating: 100,
    },
    {
      id: 4,
      name: "Rio",
      image: "https://picsum.photos/id/1016/200/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      rating: 4.2,
      totalRating: 50,
    },
  ];
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  const handleScroll = (event) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    if (y > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#503a3a"
        barStyle={statusBarStyle}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />
      <HeaderSearching />
      {tourGuides && <TourGuideSearchedList tourGuides={tourGuides} />}
    </SafeAreaView>
  );
};

export default SearchListScreen;
