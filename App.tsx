import { StyleSheet, View } from "react-native";
import { Login } from "./src/screens/Login/Login";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#2f2f2f", "#121212"]}
      style={styles.container}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 0.5 }}
      locations={[0, 1]}
    >
      <Login />
    </LinearGradient>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
