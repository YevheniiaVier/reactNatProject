import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    // height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,

    padding: 16,
  },
  makePhotoBox: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  makePhotoBtn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  makePhotoText: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    flexDirection: "row",
  },

  inputFocused: {},
  inputBox: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",

    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: 8,
  },
  postBtn: {
    height: 50,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  btnTitle: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  deleteBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },
  trashContainer: {
    marginBottom: 6,
    alignItems: "center",
  },
  content: {
    justifyContent: "space-between",
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
  },
  box: {
    // flexGrow:
    // backgroundColor: "green",
    // marginBottom: 10,
  },
});
