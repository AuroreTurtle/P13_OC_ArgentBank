import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem } from "../services/Storage";

const defaultUserAuth = { token: "", isAuthenticated: false };
let userAuth = defaultUserAuth;

if (getItem("userToken")) {
    userAuth = {
        token: getItem("userToken"),
        isAuthenticated: true,
    };
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: userAuth,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = defaultUserAuth;
            removeItem("userToken");
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
