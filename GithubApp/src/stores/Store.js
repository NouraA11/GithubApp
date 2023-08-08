import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FavoriteReducer from '../reducers/Favorite';

const reducers = combineReducers({
    Favorite: FavoriteReducer
})
const persisteConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persisteConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})