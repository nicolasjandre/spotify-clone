import React, { useEffect, useState } from "react";
import { Animated, Image, ImageSourcePropType, Text, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

interface TransparentButtonProps {
  title: string;
  src?: ImageSourcePropType;
  height: number;
  fontSize: number;
  onPress?: () => void;
}

export function TransparentButton({ title, src, fontSize, height, onPress }: TransparentButtonProps) {
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
    <TouchableWithoutFeedback onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.transparentButton, animatedStyle, {height: height}]}>
        {src && <Image style={styles.image} source={src} />}
        <Text style={[styles.text, { fontSize: fontSize }]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
