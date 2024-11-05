import { Text, View } from "react-native";
import { FlatList } from "react-native";
import TourGuideCard from "./TourGuideCard";

const TourGuideSearchedList = ({ tourGuides }) => {
  const renderTourGuide = ({ item }) => {
    return (<TourGuideCard
      image={item.image}
      name={item.name}
      description={item.description}
      rating={item.rating}
      totalRating={item.totalReview}
      tourGuideId={item.id}
    />)
  ;}


  return (
    <View className="px-6">
      <Text className="mb-4 font-ibold text-soil text-base">
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
