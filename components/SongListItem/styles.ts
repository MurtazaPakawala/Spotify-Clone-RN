import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 20,
    color: "white",
  },

  artist: {
    color: "#D3D3D3",
  },
  leftContainer: {
    padding: 10,
    justifyContent: "space-around",
  },
});

export default styles;
