import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    foodData: null,
    rateInfo: [],
    reviewInfo: [],
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
        setRateInfo: (state, action) => {
            state.rateInfo.push(action.payload);
        },
        deleteRateInfo: (state, action) => {
            const idx = state.rateInfo.findIndex((rate) => rate.email === state.user.email && rate.foodId === action.payload);
            state.rateInfo.splice(idx, 1);
        },
        refreshRateInfo: (state, action) => {
            state.rateInfo = [];
        },
        setReviewInfo: (state, action) => {
            state.reviewInfo.push(action.payload);
        },
        deleteReviewInfo: (state, action) => {
            const idx = state.reviewInfo.findIndex((review) => review.email === state.user.email);
            state.reviewInfo.splice(idx, 1);
        },
        refreshReviewInfo: (state, action) => {
            state.reviewInfo = [];
        },

    }
})

export const { setMode, setFoodData, setLogin, setLogout, setRateInfo, refreshRateInfo, setReviewInfo, refreshReviewInfo,
    deleteReviewInfo, deleteRateInfo
 } =
  authSlice.actions;
export default authSlice.reducer;