import { Text, View } from "react-native";
import { FlatList } from "react-native";
import TourGuideCard from "./TourGuideCard";

const TourGuideSearchedList = ({ tourGuides }) => {
  function formatDecimal(value) {
    return value % 1 === 0 ? `${value.toFixed(1)}` : `${value.toFixed(1)}`;
  }

  const renderTourGuide = ({ item }) => {
    return (
      <TourGuideCard
        image={item.image}
        name={item.name}
        description={item.description}
        rating={formatDecimal(item.rating)}
        totalRating={item.totalReview}
        tourGuideId={item.id}
      />
    );
  };

  return (
    <View className='px-6'>
      <Text className='mb-4 font-ibold text-soil text-base'>
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
