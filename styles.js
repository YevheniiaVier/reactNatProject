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
    // padding: 24,
    // backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "62dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#ccc",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#fff",
  },
  bcg: {
    width: "100%",
    height: "100%",
  },
});
