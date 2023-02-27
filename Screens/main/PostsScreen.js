import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles/mainStyles";
const NestedScreen = createStackNavigator();

export const PostsScreen = ({ route }) => {
  // console.log(route, "route.params");
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
              onPress={() => {
                // Handle logout action here
              }}
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
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen
        // options={{
        //   headerShown: false,
        // }}
        name="Map"
        component={MapScreen}
      />
    </NestedScreen.Navigator>
  );
};
