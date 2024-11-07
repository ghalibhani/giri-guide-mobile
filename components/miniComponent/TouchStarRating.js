import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TouchStarRating = ({
  initialRating = 0,
  onRatingChange,
  customStyle,
}) => {
  const [rating, setRating] = useState(initialRating);
  const maxStar = [1, 2, 3, 4, 5];

  const handleRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating); // Menyampaikan rating yang dipilih ke parent component
    }
  };

  const wholeStars = Math.floor(rating);
  const hasHalfStar = rating - wholeStars >= 0.5;

  return (
    <View className='flex-row gap-4'>
      {maxStar.map((item, index) => {
        const isFilled = item <= wholeStars;
        const isHalf = item === wholeStars + 1 && hasHalfStar;
        return (
          <TouchableOpacity key={index} onPress={() => handleRating(item)}>
            <AntDesign
              style={customStyle}
              name={isFilled ? "star" : isHalf ? "staro" : "staro"}
              size={20}
              color={isFilled || isHalf ? "#ECD768" : "#d4d6dd"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TouchStarRating;
