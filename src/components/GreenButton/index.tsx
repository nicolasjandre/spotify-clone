import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface GreenButtonProps {
  title: string;
}

export function GreenButton({ title }: GreenButtonProps) {
  return (
    <Pressable style={styles.greenButton}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
