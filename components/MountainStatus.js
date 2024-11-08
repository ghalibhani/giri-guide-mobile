import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo, FontAwesome6, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const MountainStatus = ({ status, iconName }) => {
  if(status === 'NORMAL') {
    return (
      <View className="flex flex-row mb-5 rounded-2xl px-6 py-4 gap-4 bg-successLight items-center font-iregular">
        <Ionicons
          name={"checkmark-circle"}
          size={24}
          color="#298267"
        />
        <Text className="font-isemibold text-soild flex-shrink text-sm text-successHover">
            NORMAL - 
            <Text className="font-iregular text-soild"> Gunung ini aman untuk didaki</Text>
        </Text>
      </View>
    )
  } else if(status === 'WASPADA'){
    return (
      <View className="flex flex-row mb-5 rounded-2xl px-6 py-4 gap-4 bg-yellowLight items-center font-iregular">
        <Entypo
          name={"dots-three-horizontal"}
          size={24}
          color="#A29415"
        />
        
        <Text className="font-isemibold text-soild flex-shrink text-sm text-yellowHover">
            WASPADA - 
            <Text className="font-iregular text-soild"> Gunung ini mulai menunjukkan kejadian vulkanik</Text>
        </Text>
      </View>
    )
  } else if(status === 'SIAGA'){
    return (
      <View className="flex flex-row mb-5 rounded-2xl px-6 py-4 gap-4 bg-warningLight items-center font-iregular">
        <FontAwesome6
          name={"circle-exclamation"}
          size={24}
          color="#E86339"
        />

        <Text className="font-isemibold text-soild flex-shrink text-sm text-warningHover">
            SIAGA - 
            <Text className="font-iregular text-soild"> Erupsi besar mungkin terjadi dalam kurun dua pekan</Text>
        </Text>
      </View>
    )
  } else if(status === 'AWAS') {
    return (
      <View className="flex flex-row mb-5 rounded-2xl px-6 py-4 gap-4 bg-errorLight items-center font-iregular">
        <Ionicons
          name={"warning"}
          size={24}
          color="#ED3241"
        />

        <Text className="font-isemibold text-soild flex-shrink text-sm text-errorHover">
            AWAS - 
            <Text className="font-iregular text-soild"> Kemungkinan erupsi besar akan terjadi dalam 24 jam</Text>
        </Text>
      </View>
    )
  }
};

export default MountainStatus;
