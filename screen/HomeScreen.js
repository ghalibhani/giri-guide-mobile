import { View } from "react-native";
import OverFlowCarousel from "../components/OverFlowCarousel";

const HomeScreen = () => {
  const data = [
    { id: 1, text: "Item 1", image: "https://via.placeholder.com/150" },
    { id: 2, text: "Item 2", image: "https://via.placeholder.com/150" },
    { id: 3, text: "Item 3", image: "https://via.placeholder.com/150" },
    { id: 4, text: "Item 4", image: "https://via.placeholder.com/150" },
    { id: 5, text: "Item 5", image: "https://via.placeholder.com/150" },
    { id: 6, text: "Item 6", image: "https://via.placeholder.com/150" },
    { id: 7, text: "Item 7", image: "https://via.placeholder.com/150" },
    { id: 8, text: "Item 8", image: "https://via.placeholder.com/150" },
    { id: 9, text: "Item 9", image: "https://via.placeholder.com/150" },
    { id: 10, text: "Item 10", image: "https://via.placeholder.com/150" },
  ];

  if (!data) {
    throw new Error("Data cannot be null or undefined");
  }

  return (
    <View>
      <OverFlowCarousel data={data} title={"Jelajahi Gunung di Jawa Timur"} />
      <OverFlowCarousel data={data} title={"Rute Perjalanan ke Destinasi"} />
      <OverFlowCarousel data={data} title={"Pengalaman pendaki lain"} />
    </View>
  );
};

export default HomeScreen;
