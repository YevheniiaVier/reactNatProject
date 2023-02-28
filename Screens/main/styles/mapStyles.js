import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  goBackBtn: {
    // position: "absolute",
    // left: 16,
    // top: -34,
    // zIndex: 1,
  },
});
