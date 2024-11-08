import { ScrollView, Text, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function StepOrderScreen() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  const [isExpanded6, setIsExpanded6] = useState(false);
  const [isExpanded7, setIsExpanded7] = useState(false);

  return (
    <SafeAreaView className='flex-1 px-6'>
      <ScrollView contentContainerStyle={{ paddingBottom: 30, flexGrow: 1 }}>
        <HeaderBackProfile text={"Tata Cara Pemesanan"} />
        <View className='pt-[20]'>
          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded1(!isExpanded1)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                1. Pilih Gunung dan Titik Pendakian
              </Text>
              <MaterialIcons
                name={isExpanded1 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded1 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Mulailah dengan memilih gunung yang ingin Anda daki serta
                  titik pendakian yang sesuai.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded2(!isExpanded2)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                2. Lihat Detail Gunung
              </Text>
              <MaterialIcons
                name={isExpanded2 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded2 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Anda akan diarahkan ke halaman yang menampilkan informasi
                  lengkap terkait gunung yang dipilih, seperti ketinggian,
                  estimasi waktu tempuh, akses transportasi, dan perkiraan
                  biaya.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded3(!isExpanded3)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                3. Pilih Tour Guide
              </Text>
              <MaterialIcons
                name={isExpanded3 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded3 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Setelah melihat detail gunung, lanjutkan ke daftar tour guide
                  yang tersedia. Pilih tour guide sesuai preferensi Anda.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded6(!isExpanded6)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                4. Lihat Profil Tour Guide
              </Text>
              <MaterialIcons
                name={isExpanded6 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded6 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Anda akan diarahkan ke halaman profil tour guide. Di sini,
                  Anda dapat melihat informasi lengkap tentang tour guide,
                  termasuk pengalaman, rating, serta biaya jasa.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded7(!isExpanded7)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                5. Isi Data Booking
              </Text>
              <MaterialIcons
                name={isExpanded7 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded7 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular mb-1'>
                  Pilih tour guide yang diinginkan, lalu isi data pemesanan:
                </Text>
                <Text className='text-base text-evergreen font-iregular ml-3 mb-1'>
                  - Data Pendaki: Masukkan data pribadi pendaki.
                </Text>
                <Text className='text-base text-evergreen font-iregular ml-3 mb-1'>
                  - Jumlah Porter: Tentukan jumlah porter jika Anda ingin
                  menyewanya.
                </Text>
                <Text className='text-base text-evergreen font-iregular ml-3 mb-1'>
                  - Catatan untuk Tour Guide: Opsional, tulis pesan atau
                  permintaan khusus untuk tour guide.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded4(!isExpanded4)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                6. Lanjut ke Halaman Transaksi
              </Text>
              <MaterialIcons
                name={isExpanded4 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded4 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Setelah data pemesanan lengkap, Anda akan diarahkan ke halaman
                  transaksi, di mana Anda dapat melihat total biaya dan
                  melanjutkan ke proses pembayaran.
                </Text>
              </>
            )}
          </View>

          <View className='bg-white rounded-3xl px-5 py-3 mb-3'>
            <TouchableOpacity
              onPress={() => setIsExpanded5(!isExpanded5)}
              className='flex-row justify-between items-center'
            >
              <Text className='font-ibold text-base text-evergreen'>
                7. Selesaikan Pembayaran
              </Text>
              <MaterialIcons
                name={isExpanded5 ? "expand-less" : "expand-more"}
                size={22}
                color={"#45594e"}
              />
            </TouchableOpacity>

            {isExpanded5 && (
              <>
                <View className='w-full h-[1] bg-gray-700 my-3'></View>
                <Text className='text-base text-evergreen font-iregular'>
                  Lakukan pembayaran sesuai metode yang disediakan untuk
                  mengonfirmasi pemesanan.
                </Text>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
