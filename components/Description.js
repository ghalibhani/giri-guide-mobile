import { View, Text } from "react-native";

const Description = ({data}) => {
  return (
    <View className="p-6 bg-white text-sm rounded-[30px] mb-5">
      <Text className="text-sm font-iregular text-evergreen">
        {data}
      </Text>
    </View>
  );
};

export default Description;
