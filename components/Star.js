import AntDesign from "@expo/vector-icons/AntDesign";

const Star = ({ star, customStyle }) => {
  const maxStar = [1, 2, 3, 4, 5];
  const wholeStars = Math.floor(star);
  const hasHalfStar = star - wholeStars >= 0.5;

  return (
    <>
      {maxStar.map((item, index) => {
        if (item <= wholeStars) {
          return (
            <AntDesign
              key={index}
              className={customStyle}
              name='star'
              size={20}
              color='#ECD768'
            />
          );
        } else if (item === wholeStars + 1 && hasHalfStar) {
          return (
            <AntDesign
              key={index}
              className={customStyle}
              name='staro'
              size={20}
              color='#ECD768'
            />
          );
        } else {
          return (
            <AntDesign
              key={index}
              className={customStyle}
              name='staro'
              size={20}
              color='#d4d6dd'
            />
          );
        }
      })}
    </>
  );
};

export default Star;
