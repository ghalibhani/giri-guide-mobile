import { Image } from "react-native";

const Thumbnail = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      className="w-full rounded-[30px] mb-6"
      style={{ height: 200 }}
    />
  );
};

export default Thumbnail;
