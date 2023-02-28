import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileContainer: {
    // marginTop: 16,
    // marginBottom: 32,
    // flexDirection: "row",
    // alignItems: "center",
  },
  imgBox: {
    width: 28,
    height: 28,
    borderRadius: 50,
    // marginRight: 8,
  },
  avatar: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
    overflow: "hidden",
  },

  postBox: {
    // marginBottom: 32,
  },
  postImg: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  commentBtn: {
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",

    top: 8,
    right: 8,
  },
  commentInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "F6F6F6",
    borderRadius: 100,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
  },

  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
});
