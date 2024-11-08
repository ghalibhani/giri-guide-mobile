import { StatusBar } from "react-native";
import HeaderSearch from "../../../components/HeaderSearch";
import OverFlowCarousel from "../../../components/OverFlowCarousel";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMountains } from "../../../redux/mountainSlice";

const SearchScreen = () => {
  
  const dispatch = useDispatch()
  const mountains = useSelector((state) => state.mountain.mountains)
  const statusMountains = useSelector((state) => state.mountain.status)
  const errorMountains = useSelector((state) => state.mountain.error)

  useEffect(() => {
    dispatch(fetchAllMountains({page: 1, size: 40}))
    // console.log(statusMountains)
  }, [dispatch])

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState("default");
  const [statusBarTransition, setStatusBarTransition] = useState("fade");

  const handleScroll = (event) => {
    const { nativeEvent } = event;
    const { contentOffset } = nativeEvent;
    const { y } = contentOffset;
    if (y > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const filteredMountains = mountains.filter(
    (mountain) => mountain.status !== "SIAGA" && mountain.status !== "AWAS" && mountain.hikingPointCount > 0
  );

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="#503a3a"
        barStyle={statusBarStyle}
        hidden={hidden}
        animated={true}
        translucent={true}
        style={statusBarTransition}
      />
      <HeaderSearch mountains={filteredMountains} />
      <OverFlowCarousel
        data={mountains}
        title={"Jelajahi Gunung di Jawa Timur"}
        continueToAllLists={"/home/allMountainCards"}
        customStyle={"mt-5"}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
