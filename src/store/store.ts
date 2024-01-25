import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { localStorageListenerMiddleware } from "./localStorageListenerMiddleware";
import { NameSpace } from "./NameSpace"

// Slices
import { userSlice } from "./slices/userSlice";
import { favorites } from "./slices/favoritesSlice";
import { pokemonApi } from "../api/api";

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [NameSpace.User]: userSlice.reducer,
    [NameSpace.Favorites]: favorites.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageListenerMiddleware.middleware).concat(pokemonApi.middleware),
});
