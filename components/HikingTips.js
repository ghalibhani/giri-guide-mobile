import { View, Text } from "react-native";

const HikingTips = () => {
  const tips = [
    "Siapkan fisik",
    "Gunakan pakaian yang sesuai",
    "Bawalah peralatan yang sesuai",
    "Perhatikan cuaca",
    "Bawalah obat-obatan",
    "Bawalah air minum yang cukup",
    "Gunakan sarung tangan",
    "Gunakan masker",
    "Gunakan masker",
    "Gunakan masker",
    "Gunakan masker",
    "Gunakan masker",
    "Gunakan masker",
    "Gunakan masker",
  ];

  return (
    <View className="p-6 bg-white rounded-[30px] mb-5">
      <Text className="text-sm font-semibold">
        Tips Pendakian yang ingin berkunjung
      </Text>
      <View className="mt-3">
        {tips.map((tip, index) => (
          <Text key={index} className="text-xs font-normal">
            {index + 1}. {tip}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HikingTips;
