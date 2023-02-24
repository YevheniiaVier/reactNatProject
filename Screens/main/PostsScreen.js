import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./mainStyles";

import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import initialPosts from "./initialPosts.json";

export const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([...initialPosts]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  // const { logIn } = route.params;

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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.commentsBox}
            // onPress={...logic}
          >
            <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
            <Text style={styles.commentCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            // onPress={...logic}
            style={styles.locationBox}
          >
            <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
            <Text style={styles.location}>{item.location}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imgBox}>
          <Image
            source={require("../../assets/images/userImg.jpg")}
            style={styles.userAvatar}
          />
        </View>
        <View style={styles.profileInfoBox}>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <Text style={styles.text}>PostsScreen</Text> */}
    </View>
  );
};
