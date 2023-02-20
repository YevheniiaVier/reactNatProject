import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    // height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    // lineHeight: 19,

    backgroundColor: "#ccc",
    // alignItems: "center",
    // justifyContent: "center",
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
  form: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 27,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  formTitle: {
    lineHeight: 35,
    color: "#212121",
    fontSize: 30,
    marginBottom: 33,
    alignSelf: "center",
  },

  formText: {
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 78,
    alignSelf: "center",
  },

  passwordBox: {
    position: "relative",
  },
  passwordBtn: {
    position: "absolute",
    justifyContent: "center",
    right: 16,
    top: "25%",
  },
  passwordBtnText: {
    color: "#1B4371",
  },
  imgBox: {
    position: "absolute",
    top: "-13%",
    left: "45%",
    transform: [{ translateX: -25 }],
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userImage: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  addUserImgBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  addUserBtnImg: {
    // width: 13,
    // height: 13,
  },
});
