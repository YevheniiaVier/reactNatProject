import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { authStateChangeUser } from "../redux/auth/auth-operations";
import { userRoute } from "../router";
// import { auth } from "../firebase/config";

export const Main = () => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector((state) => state.auth);
  console.log(stateChange, "stateChange in Main");
  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = userRoute(stateChange);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
