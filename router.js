import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

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
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="add" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),

          backgroundColor: "orange",
          borderRadius: 6,
          height: 30,
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      {/* <Tab.Screen name="Comments" component={CommentsScreen} /> */}
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
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
