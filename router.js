import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import { HomeScreen } from "./Screens/main/HomeScreen";
import { RegistrationScreen } from "./Screens/Auth/RegistrationScreen";
import { LoginScreen } from "./Screens/Auth/LoginScreen";

export const userRoute = (isAuth) => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      {isAuth ? (
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      ) : (
        <>
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
        </>
      )}
    </AuthStack.Navigator>
  );
};
