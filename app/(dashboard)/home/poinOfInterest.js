import { FlatList, View } from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import Thumbnail from "../../../components/Thumbnail";
import PointOfInterestDetail from "../../../components/PointOfInterestDetail";
const poinOfInterest = () => {
  return (
    <FlatList
      data={[1]}
      renderItem={({ item }) => (
        <HeaderComponent text={"Judul Rute Perjalanan"}>
          <View className="px-6 bg-[#f8f8f8]">
            <Thumbnail
              image={
                "https://img.freepik.com/free-vector/mountains-landscape-sundown_52683-24164.jpg?t=st=1730344884~exp=1730348484~hmac=19b8de13712b886d72c74b1e599df67156e185888242ecc83453e27b1a6d34f4&w=1380"
              }
            />
            <PointOfInterestDetail />
          </View>
        </HeaderComponent>
      )}
    />
  );
};

export default poinOfInterest;
