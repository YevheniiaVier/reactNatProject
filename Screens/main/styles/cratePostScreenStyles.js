import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto-Regular",
    // height: Platform.OS === "ios" ? 50 : 100,
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  makoPhotoBox: {
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
  //   bcg: {
  //     flex: 1,
  //     justifyContent: "flex-end",
  //     width: Dimensions.get("window").width,
  //     height: Dimensions.get("window").height,
  //   },
  //   title: {
  //     borderWidth: 4,
  //     borderColor: "#20232a",
  //     borderRadius: 6,
  //     backgroundColor: "62dafb",
  //     color: "#20232a",

  //     fontSize: 30,
  //     fontWeight: "bold",
  //   },
  //   text: {
  //     fontSize: 16,
  //     color: "#1B4371",
  //     marginBottom: 78,
  //     alignSelf: "center",
  //   },
  //   logoutBtn: {
  //     marginRight: 10,
  //   },
  //   addBtn: {
  //     width: 70,
  //     height: 40,
  //     borderRadius: 20,
  //     backgroundColor: "#FF6C00",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   profileContainer: {
  //     marginTop: 16,
  //     marginBottom: 32,
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  //   imgBox: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 16,
  //     marginRight: 8,
  //   },
  //   userAvatar: {
  //     width: "100%",
  //     flex: 1,
  //     resizeMode: "cover",
  //     borderRadius: 16,
  //     overflow: "hidden",
  //   },
  //   profileInfoBox: {},
  //   profileName: {
  //     fontFamily: "Roboto-Bold",
  //     fontSize: 13,
  //     color: "#212121",
  //   },
  //   profileEmail: {
  //     fontFamily: "Roboto-Regular",
  //     fontSize: 13,
  //     color: "rgba(33, 33, 33, 0.8)",
  //   },
  //   postBox: {
  //     // alignItems: "center",
  //     // justifyContent: "center",
  //     marginBottom: 32,
  //   },
  //   postImg: {
  //     // borderWidth: 1,
  //     height: 240,
  //     width: "100%",
  //     borderRadius: 8,
  //     marginBottom: 8,
  //   },
  //   postImgText: {
  //     fontFamily: "Roboto-Medium",
  //     fontSize: 16,
  //     color: "#212121",
  //     marginBottom: 8,
  //   },
  //   commentCount: {
  //     marginLeft: 8,
  //     color: "#BDBDBD",
  //   },
  //   commentsBox: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     // flex: 1,
  //   },
  //   location: {
  //     color: "#212121",
  //     fontFamily: "Roboto-Regular",
  //     fontSize: 16,
  //   },
  //   locationBox: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  //   description: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //   },
});
