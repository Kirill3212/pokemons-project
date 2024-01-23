import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { localStorageListener } from "./localStorageListener";

import { NameSpace } from "./NameSpace";

import { userSlice } from "./slices/userSlice";

import { pokemonApi } from "../api/api";

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [NameSpace.User]: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageListener.middleware).concat(pokemonApi.middleware),
});
