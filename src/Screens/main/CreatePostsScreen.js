import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import { SimpleLineIcons } from "@expo/vector-icons";
const {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ScrollView,
  Image,
} = require("react-native");

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { db, storage } from "../../firebase/config";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles/cratePostScreenStyles";

export const CreatePostsScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] =
    Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [locationCoords, setLocationCoords] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");

  const [isFocused, setIsFocused] = useState({
    title: false,
    location: false,
  });

  const { userId, name } = useSelector((state) => state.auth);
  useEffect(() => {
    const getCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    };
    getCameraPermission();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      // console.log(coords, " location");
      setLocationCoords(coords);
      // console.log(locationCoords, "coords");
    })();
  }, []);

  const titleHandler = (value) => setTitle(value);
  const locationHandler = (value) => setLocation(value);

  const handleCameraReady = () => {
    setIsCameraReady(true);
    // console.log("Camera is ready!");
  };

  const takePhoto = async () => {
    // if (isCameraReady) {
    // console.log(isCameraReady, "isCamera is Ready!");

    const { uri } = await cameraRef.takePictureAsync();

    await MediaLibrary.createAssetAsync(uri);
    setPhoto(uri);
    // console.log(locationCoords, "coords");
  };

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();
    const uniquePostId = Date.now().toString();
    const imgRef = ref(storage, `postImages/${uniquePostId}`);
    await uploadBytes(imgRef, file);

    const processedPhoto = await getDownloadURL(
      ref(storage, `postImages/${uniquePostId}`)
    );
    return processedPhoto;
    // console.log(processedPhoto, "processedPhoto");
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    try {
      const postRef = await addDoc(collection(db, "posts"), {
        photo,
        title,
        location,
        locationCoords,
        userId,
        name,
      });
      console.log("Document written with ID: ", postRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const onPosting = async () => {
    if (photo === "") {
      return;
    }
    uploadPostToServer();
    // console.log(title);
    // console.log(locationCoords, "location in onPosting");
    // console.log("photo", photo);

    navigation.navigate("DefaultPosts", {
      photo,
      location,
      title,
      locationCoords,
    });
    setTitle("");
    setLocation("");
    // setLocationCoords(null);
    setPhoto(null);
  };
  const handleInputFocus = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: true }));
  };
  const handleInputBlur = (value) => {
    setIsFocused((prevState) => ({ ...prevState, [value]: false }));
  };

  const onClear = () => {
    setTitle("");
    setLocation("");
    // setLocationCoords(null);
    setPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.scroll}>
            <View style={styles.content}>
              <View style={styles.box}>
                <Camera
                  type={type}
                  style={styles.camera}
                  ref={setCameraRef}
                  onCameraReady={handleCameraReady}
                >
                  {photo && (
                    <View style={styles.photoContainer}>
                      <Image
                        source={{ uri: photo }}
                        style={{ height: 70, width: 80 }}
                      />
                    </View>
                  )}
                  <TouchableOpacity
                    style={styles.flipButton}
                    onPress={toggleCameraType}
                  >
                    <MaterialCommunityIcons
                      name="camera-flip"
                      size={24}
                      color="#F6F6F6"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={takePhoto}
                    style={styles.makePhotoBtn}
                  >
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                  <View style={styles.buttonContainer}></View>
                </Camera>
                <Text style={styles.makePhotoText}>Завантажте фото</Text>

                <View style={styles.form}>
                  <View style={styles.inputBox}>
                    <TextInput
                      onFocus={() => {
                        handleInputFocus("title");
                      }}
                      onBlur={() => handleInputBlur("title")}
                      placeholderTextColor="#BDBDBD"
                      placeholder="Назва..."
                      value={title}
                      onChangeText={titleHandler}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.inputBox, marginBottom: 32 }}>
                    <SimpleLineIcons
                      style={styles.locationIcon}
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <TextInput
                      onFocus={() => {
                        handleInputFocus("location");
                      }}
                      onBlur={() => handleInputBlur("location")}
                      placeholderTextColor="#BDBDBD"
                      placeholder="Місцевість..."
                      value={location}
                      onChangeText={locationHandler}
                      style={styles.input}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      ...styles.postBtn,
                      backgroundColor:
                        title?.length === 0 ||
                        location?.length === 0 ||
                        photo == null
                          ? "#F6F6F6"
                          : "#FF6C00",
                    }}
                    onPress={onPosting}
                  >
                    <Text style={styles.btnTitle}>Опублікувати</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.trashContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.deleteBtn}
                  onPress={onClear}
                >
                  <FontAwesome5 name="trash-alt" size={24} color="#DADADA" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};
