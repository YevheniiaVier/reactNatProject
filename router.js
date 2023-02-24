import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen";
import { PostsScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostsScreen";
import { CommentsScreen } from "./Screens/main/CommentsScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { MapScreen } from "./Screens/main/MapScreen";
import { HomeScreen } from "./Screens/main/HomeScreen";
import { styles } from "./Screens/main/mainStyles";

export const userRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      // tabBarOptions={
      // {
      // showLabel: false,
      // labeled: false,
      //   tabStyle: {
      //     justifyContent: "center",
      //     marginBottom: 8,
      //   },
      // }
      // }
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
          title: "Публікації",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
          },
          // cardStyle: {
          //   backgroundColor: "red",
          // },

          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
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
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.addBtn}>
              <Ionicons name="add" size={24} color="#fff" />
            </View>
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      {/* <Tab.Screen name="Comments" component={CommentsScreen} /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      {/* <Tab.Screen name="Map" component={MapScreen} /> */}
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
    </Tab.Navigator>
  );
};
