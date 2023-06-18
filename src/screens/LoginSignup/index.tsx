import React from "react";
import { Animated, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import { GreenButton } from "../../components/GreenButton";
import { TransparentButton } from "../../components/TransparentButton";
import { LinearGradient } from "expo-linear-gradient";

export function LoginSignup() {
  const phoneIcon = require("../../../assets/phone.png");
  const googleIcon = require("../../../assets/google.png");
  const facebookIcon = require("../../../assets/facebook.webp");
  const animatedValue = new Animated.Value(1);

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  function handlePressIn() {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      speed: 4000,
      useNativeDriver: true,
    }).start();
  }

  function handlePressOut() {
    Animated.spring(animatedValue, {
      toValue: 1,
      speed: 4000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <LinearGradient
      colors={["#2f2f2f", "#121212"]}
      style={styles.container}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 0.5 }}
      locations={[0, 1]}
    >
        <Image style={styles.image} source={require("../../../assets/spotify-icon.png")} />
        <Text style={styles.text}>Millions of songs.</Text>
        <Text style={styles.text}>Free on Spotify.</Text>
        <View style={styles.buttonsWrapper}>
          <GreenButton title="Sign up free" />
          <TransparentButton src={phoneIcon} title="Continue with phone number" />
          <TransparentButton src={googleIcon} title="Continue with Google" />
          <TransparentButton src={facebookIcon} title="Continue with Facebook" />
          <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.Text style={[styles.textLogin, animatedStyle]}>Log in</Animated.Text>
          </TouchableWithoutFeedback>
        </View>
    </LinearGradient>
  );
}
