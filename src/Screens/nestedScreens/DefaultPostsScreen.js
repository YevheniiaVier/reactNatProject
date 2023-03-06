import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { db, storage } from "../../firebase/config";
import { styles } from "../main/styles/postScreenStyles";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import initialPosts from "../main/initialPosts.json";

export const DefaultPostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const { name } = useSelector((state) => state.auth);
  const getAllPost = async () => {
    const postsSnapshot = await getDocs(collection(db, "posts"));
    console.log(postsSnapshot);

    setPosts(postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const renderItem = ({ item }) => {
    console.log(item, "item  in Render");
    return (
      <View
        style={styles.postBox}
        // onPress={onPress}
      >
        <Image source={{ uri: item.photo }} style={styles.postImg} />
        <Text style={styles.postImgText}>{item.title}</Text>
        <View style={styles.description}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.commentsBox}
            onPress={() => {
              navigation.navigate("Comments", {
                postId: item.id,
                photo: item.photo,
              });
            }}
          >
            <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
            <Text style={styles.commentCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("Map", { location: item.locationCoords });
            }}
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
            source={require("../../../assets/images/userImg.jpg")}
            style={styles.userAvatar}
          />
        </View>
        <View style={styles.profileInfoBox}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
