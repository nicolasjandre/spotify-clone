import { Text, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { ColorButton } from "../ColorButton";

export function Filters() {
  return (
    <View style={styles.container}>
      <ColorButton
        fontSize={13}
        width="auto"
        padding={8}
        paddingX={16}
        height="auto"
        title="Music"
        defaultBgColor="#262626"
        fontColor="#f3f3f3"
        pressedBgColor="#363636"
      />

      <ColorButton
        fontSize={13}
        width="auto"
        padding={8}
        paddingX={16}
        height="auto"
        title="Podcasts & Shows"
        defaultBgColor="#262626"
        fontColor="#f3f3f3"
        pressedBgColor="#363636"
      />
    </View>
  );
}
