import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 3,
          elevation: 25,
          borderTopWidth: 0,
          marginBottom: 3,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarLabel: ({ focused }) => {
          return <Text style={{ color: focused ? "#fff" : "#b3b3b3", fontSize: 10 }}>{route.name}</Text>;
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["rgba(12, 12, 12, 0)", "rgba(12, 12, 12, 0.3)", "rgba(12, 12, 12, 0.5)", "rgba(12, 12, 12, 1)"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Entypo name="home" size={26} color={focused ? "#fff" : "#b3b3b3"} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Feather name="search" size={25} color={focused ? "#fff" : "#b3b3b3"} />,
        }}
        name="Search"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="library-outline" size={25} color={focused ? "#fff" : "#b3b3b3"} />
          ),
        }}
        name="Your Library"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <Fontisto name="spotify" size={22} color={focused ? "#fff" : "#b3b3b3"} />,
        }}
        name="Premium"
        component={Home}
      />
    </Tab.Navigator>
  );
}
