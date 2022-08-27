import { View, Text, Image } from "react-native";
import React from "react";
import { Song } from "../../types";
import styles from "./styles";
export type songListProp = {
  song: Song;
};

const SongList = (props: songListProp) => {
  const { song } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: song.imgUrl }} />
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </View>
  );
};

export default SongList;
