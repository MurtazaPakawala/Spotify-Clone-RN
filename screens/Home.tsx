import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Album from "../components/Album";
import AlbumCategory from "../components/AlbumCategory";

const albumCategory = {
  id: "1",
  title: "pop",
  albums: [
    {
      id: "1",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      artistHeadline: "Dominic Fike, Taylor Swift, Ed Sheeren",
    },
    {
      id: "2",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      artistHeadline: "Dominic Fike, Taylor Swift, Ed Sheeren",
    },
    {
      id: "3",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      artistHeadline: "Dominic Fike, Taylor Swift, Ed Sheeren",
    },
    {
      id: "4",
      imgUrl:
        "https://media.newyorker.com/photos/5c99431a97260b6f70cd2608/1:1/w_1745,h_1745,c_limit/Battan-Dominic-Fike.jpg",
      artistHeadline: "Dominic Fike, Taylor Swift, Ed Sheeren",
    },
  ],
};
const Home = () => {
  return (
    <View>
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
