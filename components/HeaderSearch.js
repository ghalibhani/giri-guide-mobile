import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "./miniComponent/CustomButton";
import RNPickerSelect from '../node_modules/react-native-picker-select/src/index';
import { useDispatch, useSelector } from "react-redux";
import { getHikingPointsByMountainId } from "../redux/mountainSlice";
import { useFocusEffect } from "@react-navigation/native";

const HeaderSearch = ({mountains}) => {
  const {mountainId} = useLocalSearchParams();

  const dispatch = useDispatch();
  const hikingPoints = useSelector((state) => state.mountain.hikingPoints);

  const [mountain, setMountain] = useState();
  const [positionOfInterest, setPositionOfInterest] = useState(null);
  const [mountainList, setMountainList] = useState([]);
  const [positionOfInterestList, setPositionOfInterestList] = useState([]);
  const [isPositionOfInterestPickerEnabled, setIsPositionOfInterestPickerEnabled] = useState(false);

  const [mountainName, setMountainName] = useState('');
  const [hikingPointName, setHikingPointName] = useState('');

  useEffect(() => {
    if (mountains && mountains.length > 0) {
      const formattedItems = mountains.map(mountain => ({
        label: mountain.name,  
        value: mountain.id,  
      }));
      setMountainList(formattedItems);
      // console.log(mountainList)
    }
  }, [mountains]);

  useEffect(() => {
    if (mountainId) {
      setMountain(mountainId);
      // console.log(`ini isi dari useeffect mountain id ${mountainName}`)
    } else {
      setMountain(null); 
    }
    // console.log(mountainId)
  }, [mountainId]);

  useEffect(() => {
    if (mountain) {
      // console.log("Dispatching getHikingPointsByMountainId with mountain:", mountain);
      dispatch(getHikingPointsByMountainId(mountain));
      setIsPositionOfInterestPickerEnabled(true);
    } else {
      setIsPositionOfInterestPickerEnabled(false);
      setPositionOfInterest(null);
    }
  }, [mountain, dispatch]);

  useEffect(() => {
    if (hikingPoints && hikingPoints.length > 0) {
      const formattedItems = hikingPoints.map(hikingPoint => ({
        label: hikingPoint.name,
        value: hikingPoint.id,
      }));
      setPositionOfInterestList(formattedItems);
      // console.log(mountainName)
    }
  }, [hikingPoints]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setMountain(null);
        setPositionOfInterest(null);
        setPositionOfInterestList([])
        setIsPositionOfInterestPickerEnabled(false);
      };
    }, [])
  );

  const handlePress = () => {
    if (mountain && positionOfInterest) {
      // console.log(`mountain name ${mountainName}, hiking point name ${hikingPointName}`)
      router.navigate(`/search/searchList?hikingPointId=${positionOfInterest}&hikingPointName=${hikingPointName}&mountainName=${mountainName}&mountainId=${mountain}`);
      setMountain(null);
      setPositionOfInterest(null);
    } else {
      Alert.alert("Dibutuhkan", "Isi semua kolom untuk pencarian");
    }
  };

  return (
    <View>
      <View className="bg-soil w-full h-[250px] rounded-b-[30px]"></View>

      <View className="flex flex-col justify-center items-center align-middle relative top-[-230px]">
        <TouchableOpacity className="w-[30] ml-6 h-[30] rounded-full bg-ivory border-[1px] border-soil justify-center items-center absolute left-1" onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={15}
            color="#503A3A"
          />
        </TouchableOpacity>

        <Text className="text-lg font-isemibold text-ivory">
          Pencarian tour guide
        </Text>
      </View>

      <View className="p-4 bg-white rounded-xl mt-[-180px] mx-6">
        <View className="flex-row justify-around mb-5 items-center border-borderCustom border-[1px] rounded-xl px-5 pt-5 pb-7 bg-white">
          <View className="flex-row items-center justify-between gap-5">
            <FontAwesome6 name="mountain-sun" size={15} color="#ecd768" />
            <View className="flex-col gap-3 flex-1">
              <Text className="font-iregular text-sm w-full text-thistle">Tujuan Gunung</Text>
              <RNPickerSelect
                placeholder={{
                  label: "Pilih Tujuan Gunung",
                  value: null,
                  color: '#45594E',
                }}
                value={mountain}
                onValueChange={(value) => {
                  setMountain(value)
                  const selectedMountain = mountains.find(mountain => mountain.id === value);
                  setMountainName(selectedMountain ? selectedMountain.name : '');
                }}
                items={mountainList}
                style={{
                  inputIOS: {
                    fontSize: 14,
                    fontFamily: 'Inter-Medium',
                    color: '#45594E',
                    paddingRight: 30,
                  },
                  inputAndroid: {
                    fontSize: 14,
                    fontFamily: 'Inter-Medium',
                    color: '#45594E',
                    paddingRight: 30,
                  },
                  iconContainer: { top: 6, right: 5 },
                }}
                useNativeAndroidPickerStyle={false}
                Icon={() => <Ionicons name="chevron-down" size={18} color="#503A3A" />}
              />
            </View>
          </View>
        </View>

        <View className="flex-row justify-around mb-5 items-center border-borderCustom border-[1px] rounded-xl px-5 pt-5 pb-7 bg-white">
          <View className="flex-row items-center justify-between gap-5">
            <FontAwesome6 name="mountain-sun" size={15} color="#ecd768" />
            <View className=" gap-3 flex-1 flex-shrink">
              <Text className="font-iregular text-sm w-full text-thistle">Tujuan Titik Pendakian</Text>
              <RNPickerSelect
                placeholder={{
                  label: "Pilih Titik Pendakian",
                  value: null,
                  color: '#45594E',
                }}
                value={positionOfInterest}
                onValueChange={(value) => {
                  setPositionOfInterest(value)
                  const selectedHikingPoint = hikingPoints.find(hikingPoint => hikingPoint.id === value);
                  setHikingPointName(selectedHikingPoint ? selectedHikingPoint.name : '');
                }}
                items={positionOfInterestList}
                style={{
                  inputIOS: {
                    fontSize: 14,
                    fontFamily: 'Inter-Medium',
                    color: '#45594E',
                    paddingRight: 30,
                  },
                  inputAndroid: {
                    fontSize: 14,
                    fontFamily: 'Inter-Medium',
                    color: '#45594E',
                    paddingRight: 30,
                  },
                  iconContainer: { top: 6, right: 5 },
                }}
                enabled={isPositionOfInterestPickerEnabled}
                useNativeAndroidPickerStyle={false}
                Icon={() => <Ionicons name="chevron-down" size={18} color="#503A3A" />}
              />
            </View>
          </View>
        </View>

        <View>
          <CustomButton
            buttonHandling={handlePress}
            customStyle="bg-soil min-w-full z-10"
            title="Cari tour guide"
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderSearch;
