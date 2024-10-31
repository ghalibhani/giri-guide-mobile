import { View } from "react-native";
import HeaderSearching from "../components/HeaderSearching";
import TourGuideSearchedList from "../components/TourGuideSearchedList";
const Searching = () => {
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
  return (
    <View>
      <HeaderSearching />
      {tourGuides && <TourGuideSearchedList tourGuides={tourGuides} />}
    </View>
  );
};

export default Searching;
