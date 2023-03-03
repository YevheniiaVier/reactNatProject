import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  name: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      name: payload.name,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
  },
});

// export const authReducer = authSlice.reducer;
export const { updateUser, authStateChange, authSignOut } = authSlice.actions;
