import { Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { useState, useEffect } from "react";

export function Header() {
  const [greetings, setGreetings] = useState<string>("Good morning");
  
  useEffect(() => {
    let today = new Date();
    let curHr = today.getHours();

    if (curHr < 12) {
      setGreetings("Good morning");
    } else if (curHr < 18) {
      setGreetings("Good afternoon");
    } else {
      setGreetings("Good evening");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{greetings}</Text>
      <Ionicons name="notifications-outline" size={26} color="white" />
      <Feather name="clock" size={26} color="white" />
      <Feather name="settings" size={26} color="white" />
    </View>
  );
}
