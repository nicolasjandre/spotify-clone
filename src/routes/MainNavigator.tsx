import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { LoginSignup } from "../screens/LoginSignup";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginSignUp" component={LoginSignup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
