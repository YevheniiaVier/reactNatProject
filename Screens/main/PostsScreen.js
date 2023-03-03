import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles/mainStyles";

import { authSignOutUser } from "../../redux/auth/auth-operations";
const NestedScreen = createStackNavigator();

export const PostsScreen = ({ navigation, route }) => {
  // console.log(route, "route.params");
  const dispatch = useDispatch();
  const signOut = () => {
    console.log("sighn out posts");
    dispatch(authSignOutUser());
  };

  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          title: "Публікації",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },

          // tabBarIcon: ({ focused, size, color }) => (
          //   <AntDesign
          //     name="appstore-o"
          //     size={size}
          //     color="rgba(33, 33, 33, 0.8)"
          //   />
          // ),
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOpacity: 1,
            elevation: 3,
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={signOut}
              style={styles.logoutBtn}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),

          headerTitleAlign: "center",
        }}
        name="DefaultPosts"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen
        options={{
          title: "Коментарі",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },

          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOpacity: 1,
            elevation: 3,
          },

          headerLeft: (props) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("DefaultPosts")}
              style={styles.backBtn}
            >
              <MaterialIcons
                name="keyboard-backspace"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
        name="Comments"
        component={CommentsScreen}
      />
      <NestedScreen.Screen
        options={{
          title: "Мапа",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },

          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOpacity: 1,
            elevation: 3,
          },

          headerLeft: (props) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("DefaultPosts")}
              style={styles.backBtn}
            >
              <MaterialIcons
                name="keyboard-backspace"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: "center",
        }}
        name="Map"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};
