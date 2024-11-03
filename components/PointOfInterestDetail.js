import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const PointOfInterestDetail = ({
  pointOfInterest = [
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing Stasiun blimbingStasiun blimbingStasiun blimbingvStasiun blimbingvStasiun blimbingStasiun blimbingStasiun blimbingStasiun blimbingStasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
    {
      from: "Stasiun blimbing",
      to: "Terminal Arjosari",
      transportation: "angkot",
      estimate: "5 menit",
      distance: "2 km",
    },
  ],
}) => {
  let lengthPointOfInterest = pointOfInterest.length;
  return (
    <View className="px-6 py-5 bg-white rounded-[30px] mb-5">
      {pointOfInterest.map((item, index) => (
        <View className="flex flex-row" key={index}>
          <View className="relative">
            <FontAwesome name="circle" size={24} color="#ecd768" />
            <FontAwesome
              name="circle"
              size={10}
              color="white"
              style={{ top: -17.5, left: 6 }}
            />
            {index < lengthPointOfInterest - 1 && (
              <View
                className="absolute"
                style={{
                  borderRightColor: "#ecd768",
                  borderRightWidth: 2,
                  top: 2,
                  left: 9,
                  zIndex: -1,
                  height: "100%",
                }}></View>
            )}
          </View>
          <View className="ml-6 flex gap-5">
            <Text className="text-sm font-imedium text-soil">
              Dari {item.from}, Naik {item.transportation} ke {item.to}
            </Text>
            <Text className="text-xs font-iregular text-thistle">
              ({item.distance} dalam waktu {item.estimate})
            </Text>
            <View
              style={{
                borderBottomColor: "#d4d6dd",
                borderBottomWidth: 0.5,
                marginBottom: 20,
              }}></View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PointOfInterestDetail;
