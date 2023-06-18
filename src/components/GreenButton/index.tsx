import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { ImageSourcePropType, Animated, TouchableWithoutFeedback, Text } from "react-native";

interface TransparentButtonProps {
  title: string;
}

export function GreenButton({ title }: TransparentButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>("#1db954");
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
    backgroundColor: backgroundColor,
  };

  useEffect(() => {
    if (backgroundColor === "#1d5705") {
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
    setBackgroundColor("#1d5705");
  }

  function handlePressOut() {
    setBackgroundColor("#1db954");
  }

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.greenButton, animatedStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
