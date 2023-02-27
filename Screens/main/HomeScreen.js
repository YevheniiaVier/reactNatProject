import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { styles } from "./styles/mainStyles";

export const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
          borderTopWidth: 1,
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowOpacity: 1,
          elevation: 3,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          // title: "Публікації",
          // headerTintColor: "#212121",
          // headerTitleStyle: {
          //   fontFamily: "Roboto-Bold",
          //   fontSize: 17,
          // },
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
          // headerStyle: {
          //   backgroundColor: "#FFFFFF",
          //   borderBottomWidth: 1,
          //   shadowColor: "rgba(0, 0, 0, 0.3)",
          //   shadowOpacity: 1,
          //   elevation: 3,
          // },
          // headerRight: () => (
          //   <TouchableOpacity
          //     activeOpacity={0.7}
          //     onPress={() => {
          //       // Handle logout action here
          //     }}
          //     style={styles.logoutBtn}
          //   >
          //     <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          //   </TouchableOpacity>
          // ),
          // headerTitleAlign: "center",
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          title: "Створити публікацію",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addBtn}>
              <Ionicons name="add" size={24} color="#fff" />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOpacity: 1,
            elevation: 3,
          },
          tabBarStyle: {
            display: "none",
          },
          headerLeft: (props) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
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
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FF6C00" : "#212121"}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
