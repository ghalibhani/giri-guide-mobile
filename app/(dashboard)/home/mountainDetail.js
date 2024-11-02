import { FlatList, View } from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import MountainStatus from "../../../components/MountainStatus";
import Thumbnail from "../../../components/Thumbnail";
import MountainRating from "../../../components/MountainRating";
import Description from "../../../components/Description";
import HikingTips from "../../../components/HikingTips";
import { router } from "expo-router";

const mountainDetail = () => {
  return (
    <FlatList
      data={[1]}
      renderItem={({ item }) => (
        <HeaderComponent
          text={"Nama Gunung Pilihan"}>
          <View className="px-6 bg-[#f8f8f8]">
            <MountainStatus status={"Gunung dalam keadaan aman"} />
            <Thumbnail
              image={
                "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380"
              }
            />
            <MountainRating
              star={4.5}
              totalRating={100}
              isBookmark={true}
              pointOfInterest={
                "Titik pendakian 1, Titik pendakian 2, Titik pendakian, Titik pendakian 4"
              }
              price={50000}
              theBestDuration={"2 Jam"}
            />
            <Description />
            <HikingTips />
          </View>
        </HeaderComponent>
      )}
    />
  );
};

export default mountainDetail;
