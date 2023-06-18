import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Animated, TouchableWithoutFeedback, Text } from "react-native";

interface TransparentButtonProps {
  title: string;
  defaultBgColor: string;
  pressedBgColor: string;
  fontColor: string;
}

export function ColorButton({ title, defaultBgColor, pressedBgColor, fontColor }: TransparentButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>(defaultBgColor);
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
    backgroundColor: backgroundColor,
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
        <Text style={[styles.text, {color: fontColor}]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
