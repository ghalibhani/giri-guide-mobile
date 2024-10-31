import { Text, View } from "react-native";
import { FlatList } from "react-native";
import TourGuideCard from "./TourGuideCard";

const TourGuideSearchedList = ({ tourGuides }) => {
  const renderTourGuide = ({ item }) => (
    <TourGuideCard
      image={item.image}
      name={item.name}
      description={item.description}
      rating={item.rating}
      totalRating={item.totalRating}
    />
  );

  return (
    <View className="px-6">
      <Text className="my-[15px] font-bold text-[14px]">
        Tour guide terbaik untuk kamu
      </Text>
      <FlatList
        data={tourGuides}
        renderItem={renderTourGuide}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TourGuideSearchedList;
