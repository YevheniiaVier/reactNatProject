import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  // },
  // image: {
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "flex-end",
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#f0f8ff",
  //   height: 40,
  //   borderRadius: 6,

  //   color: "#f0f8ff",
  // },
  // form: {
  //   marginHorizontal: 40,
  // },
  // inputTitle: {
  //   color: "#f0f8ff",
  //   marginBottom: 10,
  //   fontSize: 18,
  // },
  // btn: {
  //   borderRadius: 6,
  //   borderWidth: 1,
  //   height: 40,
  //   marginTop: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 20,
  //   ...Platform.select({
  //     ios: {
  //       backgroundColor: "transparent",
  //       borderColor: "#f0f8ff",
  //     },
  //     android: {
  //       backgroundColor: "#4169e1",
  //       borderColor: "transparent",
  //     },
  //   }),
  // },
  // btnTitle: {
  //   color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
  //   fontSize: 18,
  // },
  // header: {
  //   alignItems: "center",
  //   marginBottom: 150,
  // },
  // headerTitle: {
  //   fontSize: 30,
  //   color: "#f0f8ff",
  // },
  container: {
    fontFamily: "Roboto-Regular",
    height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    lineHeight: 19,

    // padding: 24,
    // backgroundColor: "#ccc",
    // alignItems: "center",
    // justifyContent: "center",
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

    // fontWeight: 500,
  },
  form: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    // justifyContent: "flex-start",
    borderTopLeftRadius: "25",
    borderTopRightRadius: "25",
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
