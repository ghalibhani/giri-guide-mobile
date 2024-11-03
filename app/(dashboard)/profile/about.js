import { Image, SafeAreaView, Text, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 px-6 py-8">
      <HeaderBackProfile text={"Tentang Aplikasi"} />
      <View className="px-6 py-[30]  mb-3 flex-1 bg-white rounded-[30] items-center">
        <Image
          source={require("../../../assets/logo-dummy.jpg")}
          className="w-[150] h-[150] mb-[30]"
        />
        <Text className="text-evergreen">
          Tempor est magna quis commodo consectetur officia est cillum ad.
          Tempor amet sit duis labore nulla et labore dolor aliqua dolor ut ut
          cupidatat aliquip. Irure eiusmod tempor ad qui ut adipisicing ullamco
          fugiat minim aliqua nisi amet. Ullamco voluptate adipisicing sint
          adipisicing occaecat ut est. In id dolore enim eu fugiat sunt. Nulla
          duis mollit anim velit in est mollit qui in. Cupidatat veniam non
          incididunt fugiat laborum minim in tempor ullamco labore commodo et
          labore dolore. Consequat do ea exercitation amet nulla quis labore
          duis laboris occaecat nostrud Lorem eu excepteur. Incididunt ut
          consequat quis est laboris. Cupidatat laborum officia reprehenderit
          commodo ullamco eiusmod officia culpa enim ipsum in minim. Velit quis
          ad proident minim adipisicing pariatur. Et et cillum consectetur nisi
          sunt ut laboris. Non labore veniam ut proident laboris magna.
        </Text>
      </View>
    </SafeAreaView>
  );
}
