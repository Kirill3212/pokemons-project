import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { localStorageListenerMiddleware } from "./localStorageListenerMiddleware";
import { NameSpace } from "./NameSpace"

// Slices
import { user } from "./slices/userSlice";
import { favorites } from "./slices/favoritesSlice";
import { history } from './slices/historySlice';
import { pokemonApi } from "../api/api";

const rootReducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [NameSpace.User]: user.reducer,
    [NameSpace.Favorites]: favorites.reducer,
    [NameSpace.History]: history.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageListenerMiddleware.middleware).concat(pokemonApi.middleware),
});
