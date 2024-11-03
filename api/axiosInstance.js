import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Buat instance Axios
const axiosInstance = axios.create({
  baseURL: "http://10.10.102.67:8080/api/v1",
});

// Request interceptor untuk menyertakan token dari AsyncStorage
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token"); // Mengambil token dari AsyncStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Menambahkan token ke header Authorization
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAxiosResponseInterceptor = (navigation) => {
  // Response interceptor untuk menangani error status 401 (Unauthorized)
  axiosInstance.interceptors.response.use(
    (response) => response, // Kembalikan respons jika berhasil
    (error) => {
      if (error.response && error.response.status === 401) {
        // Arahkan pengguna ke halaman login jika status 401 Unauthorized
        navigation.navigate("SignIn");
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
