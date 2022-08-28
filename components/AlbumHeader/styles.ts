import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    height: 250,
    width: 250,
  },
  name: {
    color: "white",
    fontSize: 30,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "white",
    margin: 10,
  },
  btn: {
    backgroundColor: "#90EE90",
    borderRadius: 30,
    padding: 4,
    width: 120,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 30,
  },
});

export default styles;
