import React, { useEffect, useState } from "react";
import { Animated, Image, ImageSourcePropType, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

interface TransparentButtonProps {
  title: string;
  src: ImageSourcePropType;
}

export function TransparentButton({ title, src }: TransparentButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>("transparent");
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
    backgroundColor: backgroundColor,
  };

  useEffect(() => {
    if (backgroundColor === "#505050") {
      Animated.spring(animatedValue, {
        toValue: 0.95,
        speed: 4000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [backgroundColor, animatedValue]);

  function handlePressIn() {
    setBackgroundColor("#505050");
  }

  function handlePressOut() {
    setBackgroundColor("transparent");
  }

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.transparentButton, animatedStyle]}>
        <Image style={styles.image} source={src} />
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
