import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";

type Music = {
  name: string;
  imgUrl: string;
  topic?: string;
  description?: string;
};

type GeneralCollection = {
  title: string;
  playlist: Music[];
};

interface CollectionProps {
  collection: GeneralCollection;
  index: number;
  lastItem: number;
}

export function GeneralCollection({ collection, index, lastItem }: CollectionProps) {
  return (
    <View style={{paddingBottom: index === lastItem -1 ? 60 : 0}}>
      <Text style={styles.title}>{collection?.title}</Text>
      <FlatList
        data={collection?.playlist}
        keyExtractor={(playlist) => playlist?.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image style={{ height: 160, width: 160, marginRight: 16 }} source={{ uri: item?.imgUrl }} />
            <View style={{ gap: 4, marginTop: 6 }}>
              {item?.topic && (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.topic}>
                  {item?.topic}
                </Text>
              )}
              <Text
                numberOfLines={item?.description || item?.topic ? 1 : 2}
                ellipsizeMode="tail"
                style={styles.playlistName}
              >
                {item?.name}
              </Text>
              {item?.description && (
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.description}>
                  {item?.description}
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
