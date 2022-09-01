import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import Album from "../components/Album";
import AlbumCategory from "../components/AlbumCategory";
import albumCategoryData from "../data/albumCategories";

const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={albumCategoryData}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
});
