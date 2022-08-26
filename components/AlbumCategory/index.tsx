import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Album } from "../../types";
import styles from "./styles";
import AlbumComponent from "../Album";
export type AlbumCategoryProps = {
  title: string;
  albums: Array<Album>;
};
const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
