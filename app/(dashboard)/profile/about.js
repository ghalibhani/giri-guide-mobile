import { Image, SafeAreaView, Text, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";

export default function AboutScreen() {
  return (
    <SafeAreaView className='flex-1 px-6 py-8'>
      <HeaderBackProfile text={"Tentang Aplikasi"} />
      <View className='px-6 py-[30] mb-3 flex-1 bg-white rounded-[30] items-center'>
        <Image
          source={require("../../../assets/logo-giri-guide.png")}
          className='w-[150] h-[150] mb-[30]'
        />
        <Text className='text-base font-iregular text-evergreen'>
          GiriGuide menggabungkan keindahan budaya dan alam dengan petualangan
          mendaki gunung. Terinspirasi dari kata "Giri" yang berarti "gunung"
          dalam bahasa Sansekerta, aplikasi ini dirancang bagi petualang yang
          ingin menjelajahi pegunungan dengan panduan lokal berpengalaman,
          sambil menghargai nilai budaya di setiap langkah. Kami berkomitmen
          memberikan pengalaman mendaki yang autentik, aman, dan berkesan,
          menjaga keseimbangan antara petualangan dan penghormatan terhadap
          alam.
        </Text>
      </View>
    </SafeAreaView>
  );
}
