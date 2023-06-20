import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

type Music = {
  name: string;
  imgUrl: string;
};

type Collection = {
  title: string;
  playlist: Music[];
};

interface CollectionProps {
  collection: Collection;
}

export function RecentlyCollection({ collection }: CollectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{collection?.title}</Text>
      <FlatList
        data={collection?.playlist}
        keyExtractor={(playlist) => playlist?.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image style={{ height: 120, width: 120, marginRight: 16 }} source={{ uri: item?.imgUrl }} />
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.playlistName}>
              {item?.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
