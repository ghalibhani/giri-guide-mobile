import AntDesign from "@expo/vector-icons/AntDesign";

const Star = ({ star }) => {
  const maxStar = [1, 2, 3, 4, 5];

  return (
    <>
      {maxStar.map((item, index) => {
        if (item <= star) {
          return (
            <AntDesign key={index} name="star" size={20} color="#ECD768" />
          );
        } else {
          return (
            <AntDesign key={index} name="staro" size={20} color="#d4d6dd" />
          );
        }
      })}
    </>
  );
};

export default Star;
