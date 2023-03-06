import { db, auth } from "../../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { updateUser, authStateChange, authSignOut } from "./auth-slice";

export const authSignUp =
  ({ name, password, email }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      const { displayName, uid } = auth.currentUser;
      const userUpdateProfile = {
        name: displayName,
        userId: uid,
      };
      console.log(userUpdateProfile, "userUpdateProfile in authSignUp");
      dispatch(updateUser(userUpdateProfile));
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user, "user in authSignIn");
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  // console.log(user, "authSignOutUser");
  console.log(auth, "authSignOutUser");
  await signOut(auth);
  dispatch(authSignOut());
};

// export const authSignOutUser = () => {
// signOut(auth)
//   .then(
//     dispatch(authSignOut())
//   )
//   .catch((error) => {
//     console.log(error);
//   });
// }

export const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    // console.log(user, "usrer in authStateChangeUser");
    // console.log(user.displayName, "displayName in authStateChangeUser");
    // console.log(user.uid, "user.uid in authStateChangeUser");

    if (user) {
      const userUpdateProfile = {
        name: user.displayName,
        userId: user.uid,
      };
      console.log(userUpdateProfile, "userUpdateProfile authStateChangeUser");
      dispatch(updateUser(userUpdateProfile));

      dispatch(
        authStateChange({
          stateChange: true,
        })
      );
    }
  });
};
