import { BottomTabNavigator } from "./src/routes/BottomTabNavigator";
import { Home } from "./src/screens/Home";
import { Login } from "./src/screens/Login";
import { LoginSignup } from "./src/screens/LoginSignup";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
      <BottomTabNavigator />
  );
}
