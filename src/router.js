import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import { HomeScreen } from "../src/Screens/main/HomeScreen";
import { RegistrationScreen } from "../src/Screens/Auth/RegistrationScreen";
import { LoginScreen } from "../src/Screens/Auth/LoginScreen";

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
