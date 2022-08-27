import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AlbumScreen");
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: props.album.imgUrl }} />
        <Text style={styles.title}>{props.album.artistHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
