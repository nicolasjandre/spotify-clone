import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { GreenButton } from "../../components/GreenButton";
import { TransparentButton } from "../../components/TransparentButton";

export function Login() {
  const phoneIcon = require("../../../assets/phone.png");
  const googleIcon = require("../../../assets/google.png");
  const facebookIcon = require("../../../assets/facebook.webp");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/spotify-icon.png")} />
      <Text style={styles.text}>Millions of songs.</Text>
      <Text style={styles.text}>Free on Spotify.</Text>
      <View style={styles.buttonsWrapper}>
        <GreenButton title="Sign up free" />
        <TransparentButton src={phoneIcon} title="Continue with phone number" />
        <TransparentButton src={googleIcon} title="Continue with Google" />
        <TransparentButton src={facebookIcon} title="Continue with Facebook" />
        <Text style={styles.textLogin}>Log in</Text>
      </View>
    </View>
  );
}
