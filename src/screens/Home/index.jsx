import { View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Filters } from "../../components/Filters";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Filters />
    </View>
  );
}
