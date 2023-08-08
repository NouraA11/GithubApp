import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const FavoriteSlice = createSlice({
    name: "FavoriteList",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const repo = action.payload;
            state.push(repo);
        },
        removeFavorite: (state, action) => {
            return state.filter((repo) => repo.id !== action.payload.id);
        },
    }
})
export const { addFavorite, removeFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;