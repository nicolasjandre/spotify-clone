import React from "react";
import { Animated, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import { ColorButton } from "../../components/ColorButton";
import { TransparentButton } from "../../components/TransparentButton";
import { NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

type BottomTabParamList = {
  LoginSignUp: undefined;
  Login: undefined;
  Home: undefined;
  Search: undefined;
  YourLibrary: undefined;
  Premium: undefined;
};

export function LoginSignup({ navigation }: { navigation: NavigationProp<BottomTabParamList, "LoginSignUp"> }) {
  const phoneIcon = require("../../../assets/phone.png");
  const googleIcon = require("../../../assets/google.png");
  const facebookIcon = require("../../../assets/facebook.webp");
  const animatedValue = new Animated.Value(1);

  const handleNavigation = () => {
    navigation.navigate("Login");
  };

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
        <ColorButton
          fontSize={16}
          width="84%"
          fontBold
          height={50}
          fontColor="#121212"
          defaultBgColor="#1db954"
          pressedBgColor="#1d5705"
          title="Sign up free"
        />
        <TransparentButton height={50} fontSize={16} src={phoneIcon} title="Continue with phone number" />
        <TransparentButton height={50} fontSize={16} src={googleIcon} title="Continue with Google" />
        <TransparentButton height={50} fontSize={16} src={facebookIcon} title="Continue with Facebook" />
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Animated.Text onPress={handleNavigation} style={[styles.textLogin, animatedStyle]}>
            Log in
          </Animated.Text>
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
}
