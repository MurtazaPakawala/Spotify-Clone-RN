import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: Album;
};
const AlbumHeader = (props: AlbumHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: props.album.imgUrl }} />

      <Text style={styles.name}>{props.album.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.text}> By {props.album.by}</Text>
        <Text style={styles.text}>
          Number of Likes: {props.album.numberOfLikes}
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
