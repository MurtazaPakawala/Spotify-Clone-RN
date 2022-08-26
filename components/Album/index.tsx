import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { Album } from "../../types";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: props.album.imgUrl }} />
    <Text style={styles.title}>{props.album.artistHeadline}</Text>
  </View>
);

export default AlbumComponent;
