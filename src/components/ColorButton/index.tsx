import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Animated, TouchableWithoutFeedback, Text } from "react-native";

interface TransparentButtonProps {
  title: string;
  defaultBgColor: string;
  pressedBgColor: string;
  fontColor: string;
  fontSize: number;
  width: number | string;
  height: number | string;
  padding?: number;
  paddingX?: number;
  fontBold?: boolean;
}

export function ColorButton({ title, defaultBgColor, pressedBgColor, fontColor, fontSize, width, height, padding, paddingX, fontBold }: TransparentButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>(defaultBgColor);
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
    backgroundColor: backgroundColor,
    width: width,
    height: height,
    padding: padding ? padding : 0,
    paddingRight: paddingX ? paddingX : 0,
    paddingLeft: paddingX ? paddingX : 0
  };

  useEffect(() => {
    if (backgroundColor === pressedBgColor) {
      Animated.spring(animatedValue, {
        toValue: 0.95,
        speed: 4000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 1,
        speed: 30,
        useNativeDriver: true,
      }).start();
    }
  }, [backgroundColor]);

  function handlePressIn() {
    setBackgroundColor(pressedBgColor);
  }

  function handlePressOut() {
    setBackgroundColor(defaultBgColor);
  }

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.greenButton, animatedStyle]}>
        <Text style={[{color: fontColor, fontSize: fontSize, fontWeight: fontBold ? "bold" : "normal"}]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
