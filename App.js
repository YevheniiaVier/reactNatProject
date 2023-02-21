import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen";
import { PostsScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostsScreen";
import { CommentsScreen } from "./Screens/main/CommentsScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { MapScreen } from "./Screens/main/MapScreen";
import { HomeScreen } from "./Screens/main/HomeScreen";

const RobotoRegular = require("./assets/fonts/Roboto/Roboto-Regular.ttf");
const RobotoBold = require("./assets/fonts/Roboto/Roboto-Bold.ttf");
const RobotoMedium = require("./assets/fonts/Roboto/Roboto-Medium.ttf");

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const userRoute = (isAuth) => {
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
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": RobotoRegular,
    "Roboto-Bold": RobotoBold,
    "Roboto-Medium": RobotoMedium,
  });
  const routing = userRoute(null);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
