import { FlatList, View } from "react-native";
import OverFlowCarousel from "../components/OverFlowCarousel";
import HeaderHome from "../components/HeaderHome";
import SlideCarousel from "../components/SlideCarousel";

const HomeScreen = () => {
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

  if (!data) {
    throw new Error("Data cannot be null or undefined");
  }

  try {
    return (
      <FlatList
        data={[1]}
        className="bg-[#f8f8f8]"
        renderItem={() => (
          <View>
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
            />
            <OverFlowCarousel
              data={data}
              title={"Pengalaman pendaki lain"}
              withDescription={true}
            />
          </View>
        )}
      />
    );
  } catch (error) {
    console.error("Error rendering HomeScreen:", error);
  }
};

export default HomeScreen;
