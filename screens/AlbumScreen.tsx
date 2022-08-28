import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import SongList from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";

const data = {
  id: "1",
  imgUrl:
    "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
  artistHeadline: "Dominic Fike, Taylor Swift, Ed Sheeren",
  name: "something",
  numberOfLikes: "3",
  by: "spotify music",
  songs: [
    {
      id: "1",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      title: "high on you",
      artist: "Dominic Fike",
    },
    {
      id: "2",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      title: "high on you",
      artist: "Dominic Fike",
    },
    {
      id: "3",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      title: "high on you",
      artist: "Dominic Fike",
    },
    {
      id: "4",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      title: "high on you",
      artist: "Dominic Fike",
    },
    {
      id: "5",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      title: "high on you",
      artist: "Dominic Fike",
    },
  ],
};
const AlbumScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data.songs}
        renderItem={({ item }) => <SongList song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={({ item }) => <AlbumHeader album={data} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AlbumScreen;
