import { Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good afternoon</Text>
      <Ionicons name="notifications-outline" size={28} color="white" />
      <Feather name="clock" size={28} color="white" />
      <Feather name="settings" size={28} color="white" />
    </View>
  );
}
