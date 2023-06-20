import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorButton } from "../../components/ColorButton";
import { TransparentButton } from "../../components/TransparentButton";
import { NavigationProp } from "@react-navigation/native";

type MainNavigatorParamList = {
  LoginSignUp: undefined;
  Login: undefined;
  BottomTab: { screen: string };
};

type LoginProps = {
  navigation: NavigationProp<MainNavigatorParamList, "Login">;
};

export function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const handleNavigation = () => {
    navigation.navigate("BottomTab", { screen: "Home" });
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <View style={styles.container}>
      <AntDesign style={{ marginBottom: "6%" }} name="arrowleft" size={24} color="#ffffff" />
      <View>
        <Text style={styles.text}>Email or username</Text>
        <TextInput
          selectionColor="#ffffff"
          style={[styles.textInput, { backgroundColor: isEmailFocused ? "#828282" : "#474747" }]}
          onChangeText={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          autoCapitalize="none"
        />
      </View>
      <View style={{ position: "relative" }}>
        <Text style={[styles.text, { marginTop: "9%" }]}>Password</Text>
        <TextInput
          selectionColor="#ffffff"
          style={[styles.textInput, { backgroundColor: isPasswordFocused ? "#828282" : "#474747" }]}
          onChangeText={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons name={!isPasswordVisible ? "eye-off" : "eye"} size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: "13%" }}>
        <View style={{ width: 130, alignItems: "center" }}>
          <ColorButton
            onPress={handleNavigation}
            fontBold
            fontSize={16}
            width="84%"
            height={50}
            fontColor={email === "" || password === "" ? "rgba(1, 0, 0, 0.4)" : "#121212"}
            defaultBgColor={email === "" || password === "" ? "#606060" : "#ffffff"}
            pressedBgColor={email === "" || password === "" ? "#606060" : "#b3b3b3"}
            disabled={email === "" || password === ""}
            title="Log in"
          />
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: "9.5%" }}>
        <View style={{ width: 200, alignItems: "center" }}>
          <TransparentButton onPress={handleNavigation} height={24} fontSize={12} title="Log in without password" />
        </View>
      </View>
    </View>
  );
}
