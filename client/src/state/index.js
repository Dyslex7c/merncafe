import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    foodData: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setFoodData: (state, action) => {
            state.foodData = action.payload;
        },
    }
})

export const { setMode, setFoodData, setLogin, setLogout } =
  authSlice.actions;
export default authSlice.reducer;