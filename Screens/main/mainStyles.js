import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    // height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bcg: {
    flex: 1,

    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "62dafb",
    color: "#20232a",

    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 78,
    alignSelf: "center",
  },
  logoutBtn: {
    marginRight: 10,
  },
  addBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});
