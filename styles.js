import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    lineHeight: 19,

    // padding: 24,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // marginTop: 16,
    // paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: "#20232a",
    // borderRadius: 6,
    // backgroundColor: "62dafb",
    // color: "#20232a",
    // textAlign: "center",
    // fontSize: 30,
    // fontWeight: "bold",
  },
  input: {
    width: 343,
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
  bcg: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  formTitle: {
    lineHeight: 35,
    color: "#212121",
    fontSize: 30,
    marginBottom: 33,
  },
  form: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 550,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  formText: {
    fontSize: 16,
    color: "#1B4371",
  },

  passwordBox: {
    position: "relative",
  },
  passwordInput: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",

    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  passwordBtn: {
    position: "absolute",
    justifyContent: "center",
    right: 16,
    top: "50%",
    transform: [{ translateY: -9 }],
  },
  passwordBtnText: {
    color: "#1B4371",
  },
});
