import { createStackNavigator } from "@react-navigation/stack";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({ route }) => {
  // console.log(route, "route.params");
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          headerShown: false,
          title: "Posts",
        }}
        name="DefaultPosts"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
