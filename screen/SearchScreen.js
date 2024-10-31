import { View } from "react-native";
import HeaderSearch from "../components/HeaderSearch";
import OverFlowCarousel from "../components/OverFlowCarousel";
const SearchScreen = () => {
  const data = [
    {
      id: 1,
      text: "Item 1",
      image: "https://via.placeholder.com/150",
      description: "Description 1",
    },
    {
      id: 2,
      text: "Item 2",
      image: "https://via.placeholder.com/150",
      description: "Description 2",
    },
    {
      id: 3,
      text: "Item 3",
      image: "https://via.placeholder.com/150",
      description: "Description 3",
    },
    {
      id: 4,
      text: "Item 4",
      image: "https://via.placeholder.com/150",
      description: "Description 4",
    },
    {
      id: 5,
      text: "Item 5",
      image: "https://via.placeholder.com/150",
      description: "Description 5",
    },
    {
      id: 6,
      text: "Item 6",
      image: "https://via.placeholder.com/150",
      description: "Description 6",
    },
    {
      id: 7,
      text: "Item 7",
      image: "https://via.placeholder.com/150",
      description: "Description 7",
    },
    {
      id: 8,
      text: "Item 8",
      image: "https://via.placeholder.com/150",
      description: "Description 8",
    },
    {
      id: 9,
      text: "Item 9",
      image: "https://via.placeholder.com/150",
      description: "Description 9",
    },
    {
      id: 10,
      text: "Item 10",
      image: "https://via.placeholder.com/150",
      description: "Description 10",
    },
  ];
  return (
    <View>
      <HeaderSearch />
      <OverFlowCarousel
        data={data}
        title="Rekomendasi"
        customStyle={"relative top-[150px]"}
      />
    </View>
  );
};

export default SearchScreen;
