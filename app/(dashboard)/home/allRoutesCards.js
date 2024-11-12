import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRoutes } from "../../../redux/routesSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSubMenu from "../../../components/miniComponent/HeaderSubMenu";
import SearchButton from "../../../components/miniComponent/SearchButton";
import { router } from "expo-router";

const AllRoutesCardsScreen = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const travelRoutes = useSelector((state) => state.travelRoute.travelRoutes);
  const statusTravelRoutes = useSelector((state) => state.travelRoute.status);
  const errorTravelRoutes = useSelector((state) => state.travelRoute.error);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAllRoutes({ page: 1, size: 40 }));
  }, [dispatch]);

  useEffect(() => {
    if (statusTravelRoutes === "succeed") {
      setLoading(false);
    }
  }, [statusTravelRoutes]);

  const screenWidth = Dimensions.get("window").width;

  const filteredTravelRoutes = travelRoutes.filter((travelRoute) =>
    travelRoute.title.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(filteredTravelRoutes);

  const groupedTravelRoutesList = filteredTravelRoutes.reduce(
    (result, travelRoute, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!result[rowIndex]) result[rowIndex] = [];
      result[rowIndex].push(travelRoute);
      return result;
    },
    []
  );

  const data = [
    {
      id: 1,
      text: "Item 1",
      image:
        "https://kilasjatim.com/wp-content/uploads/2024/08/gunung-semeru-2_43.jpeg",
      description: "Description 1",
    },
    {
      id: 2,
      text: "Item 2",
      image:
        "https://public.urbanasia.com/images/post/2020/12/30/1609305585-semeru-(2).JPG",
      description: "Description 2",
    },
    {
      id: 3,
      text: "Item 3",
      image:
        "https://media.istockphoto.com/id/1704122116/photo/tumpak-sewu-waterfall-and-semeru-mountain-at-sunrise-indonesia.jpg?s=612x612&w=0&k=20&c=xP5f_2u3bmLVi2G7GapeDjIspgc-Dr7e3BAYCpm9BxI=",
      description: "Description 3",
    },
    {
      id: 4,
      text: "Item 4",
      image:
        "https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybridhttps://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid",
      description: "Description 4",
    },
    {
      id: 5,
      text: "Item 5",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01grbwb5aav5vt1g5bpjg627fw.jpg",
      description: "Description 5",
    },
  ];

  if (loading || statusTravelRoutes === "loading") {
    return (
      <View className='flex-1 items-center justify-center bg-white'>
        <Image
          source={require("../../../assets/loading.gif")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView className='flex-1'>
      <StatusBar backgroundColor={"#503A3A"} barStyle={"light-content"} />

      <View className='flex-1 bg-grayCustom'>
        <View className='bg-soil pt-4 pb-7 gap-6 rounded-b-verylarge mb-5'>
          <HeaderSubMenu title={"Daftar Rute Perjalanan"} />

          <SearchButton
            keyword={keyword}
            setKeyword={setKeyword}
            placeholder={"Cari rute perjalanan"}
          />
        </View>

        <ScrollView>
          <View className='px-6'>
            {groupedTravelRoutesList.map((row, rowIndex) => (
              <View key={rowIndex} className='flex-row gap-4 justify-between'>
                {row.map((travelRoute) => {
                  const randomImage = data[rowIndex % data.length].image;
                  return (
                    <TouchableOpacity
                      key={travelRoute.id}
                      onPress={() =>
                        router.push(
                          `/home/routeDetail?id=${travelRoute.id}&imageUrl=${randomImage}`
                        )
                      }
                    >
                      <View
                        className='mb-6 pb-6 bg-white rounded-verylarge shadow-lg shadow-evergreen'
                        style={{ width: (screenWidth - 64) / 2 }}
                      >
                        <Image
                          source={{ uri: randomImage }}
                          className='w-full h-40 rounded-t-verylarge'
                          resizeMode='cover'
                        />
                        <Text className='text-soil text-left pl-3  text-base font-imedium'>
                          {travelRoute.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllRoutesCardsScreen;
