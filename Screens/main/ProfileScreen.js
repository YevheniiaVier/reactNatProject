import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { db, auth } from "../../firebase/config.js";

import { styles } from "./styles/profileStyles.js";
import initialPosts from "./initialPostsProfile.json";
import { SimpleLineIcons } from "@expo/vector-icons";

import { authSignOutUser } from "../../redux/auth/auth-operations.js";

export const ProfileScreen = () => {
  const [posts, setPosts] = useState([...initialPosts]);
  const dispatch = useDispatch();

  const signOut = () => {
    console.log("sign out profile");

    dispatch(authSignOutUser());
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={styles.postBox}
        // onPress={onPress}
      >
        <Image
          source={require("../../assets/images/posts/post-img1.jpg")}
          style={styles.postImg}
        />
        <Text style={styles.postImgText}>{item.description}</Text>
        <View style={styles.description}>
          <View style={styles.commentsWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.commentsBox}
              // onPress={...logic}
            >
              <FontAwesome name="comment" size={18} color="#FF6C00" />
              <Text style={styles.commentCount}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.commentsBox}>
              <AntDesign name="like2" size={18} color="#FF6C00" />
              <Text style={styles.commentCount}>20</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            // onPress={...logic}
            style={styles.locationBox}
          >
            <SimpleLineIcons name="location-pin" size={18} color="#BDBDBD" />
            <Text style={styles.location}>{item.location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bcg}
        source={require("../../assets/images/bcgimg.jpg")}
      >
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={signOut}
            style={styles.logoutBtn}
          >
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <View style={styles.imgBox}>
            <Image
              source={require("../../assets/images/userImg.jpg")}
              style={styles.userImage}
            />

            <TouchableOpacity
              style={{ ...styles.addUserImgBtn, borderColor: "#E8E8E8" }}
              activeOpacity={0.8}
            >
              <Image
                source={require("../../assets/images/removeBtn.png")}
                style={styles.addUserBtnImg}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
