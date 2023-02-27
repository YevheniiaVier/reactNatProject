import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
    top: -34,
    zIndex: 1,
  },
  imgBox: {
    width: "100%",
    height: 240,
  },
  img: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 16,
  },
  commentsContainer: {
    flex: 1,
    marginTop: 32,
  },
  commentsInputBox: {
    marginBottom: 16,
    marginTop: 16,
    position: "relative",
  },
  commentsInput: {
    height: 50,
    paddingLeft: 16,
    paddingRight: 42,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  submitBtn: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -17 }],
    right: 8,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
  },
});
