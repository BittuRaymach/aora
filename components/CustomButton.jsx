import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handleOnPress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={0.7}
      className={`bg-secondary min-h-[60px] items-center justify-center rounded-xl ${containerStyle} ${
        isLoading ? "Opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-lg text-primary font-poppinsSemiBold ${textStyle} `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
