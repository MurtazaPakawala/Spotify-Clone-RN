import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
export type AlbumProps = {
  album: {
    id: string;
    imgUrl: string;
    artistHeadline: string;
  };
};

const Album = (props: AlbumProps) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.album.imgUrl }} />
    <Text style={styles.title}>{props.album.artistHeadline}</Text>
  </View>
);

export default Album;
