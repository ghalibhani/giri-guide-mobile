import { ScrollView, Text, View } from "react-native";
import HeaderBackProfile from "../../../components/HeaderBackProfile";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepOrderScreen() {
  return (
    <SafeAreaView className='flex-1 px-6'>
      <ScrollView contentContainerStyle={{ paddingBottom: 30, flexGrow: 1 }}>
        <HeaderBackProfile text={"Tata Cara Pemesanan"} />
        <View className='flex-col bg-white rounded-[30] px-6 pt-[20] pb-6'>
          <Text className='text-base text-evergreen font-iregular mb-4'>
            1.{" "}
            <Text className='font-ibold'>Pilih Gunung dan Titik Pendakian</Text>{" "}
            - Mulailah dengan memilih gunung yang ingin Anda daki serta titik
            pendakian yang sesuai.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            2. <Text className='font-ibold'>Lihat Detail Gunung</Text> - Anda
            akan diarahkan ke halaman yang menampilkan informasi lengkap terkait
            gunung yang dipilih, seperti ketinggian, estimasi waktu tempuh,
            akses transportasi, dan perkiraan biaya.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            3. <Text className='font-ibold'>Pilih Tour Guide</Text> - Setelah
            melihat detail gunung, lanjutkan ke daftar tour guide yang tersedia.
            Pilih tour guide sesuai preferensi Anda.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            4. <Text className='font-ibold'>Lihat Profil Tour Guide</Text> -
            Anda akan diarahkan ke halaman profil tour guide. Di sini, Anda
            dapat melihat informasi lengkap tentang tour guide, termasuk
            pengalaman, rating, serta biaya jasa.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            5. <Text className='font-ibold'>Isi Data Booking</Text> - Pilih tour
            guide yang diinginkan, lalu isi data pemesanan:
          </Text>
          <Text className='text-base text-evergreen font-iregular ml-3 mb-2'>
            - Data Pendaki: Masukkan data pribadi pendaki.
          </Text>
          <Text className='text-base text-evergreen font-iregular ml-3 mb-2'>
            - Jumlah Porter: Tentukan jumlah porter jika Anda ingin menyewanya.
          </Text>
          <Text className='text-base text-evergreen font-iregular ml-3 mb-2'>
            - Catatan untuk Tour Guide: Opsional, tulis pesan atau permintaan
            khusus untuk tour guide.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            6. <Text className='font-ibold'>Lanjut ke Halaman Transaksi</Text> -
            Setelah data pemesanan lengkap, Anda akan diarahkan ke halaman
            transaksi, di mana Anda dapat melihat total biaya dan melanjutkan ke
            proses pembayaran.
          </Text>

          <Text className='text-base text-evergreen font-iregular mb-4'>
            7. <Text className='font-ibold'>Selesaikan Pembayaran</Text> -
            Lakukan pembayaran sesuai metode yang disediakan untuk mengonfirmasi
            pemesanan.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
