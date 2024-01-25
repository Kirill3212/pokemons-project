import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../NameSpace";
import { SinglePokemonData } from "../../types/pokemonData";

type InitialState = {
    favorites: SinglePokemonData[]
}

const initialState: InitialState = {
    favorites: [],
}

export const favorites = createSlice({
    name: NameSpace.Favorites,
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = [...action.payload]
        },
        clearFavorites: (state) => {
            state.favorites = []
        },
        addToFavorites: (state, action) => {
            const notExist = state.favorites.every(item => item.id !== action.payload.id)
            if(notExist){
                state.favorites.push(action.payload)
            }
        },
        deleteFromFavorites: (state, action) => {
            state.favorites = [...state.favorites.filter(item => item.id !== action.payload)]
        }
    }
})

export const { setFavorites, clearFavorites, addToFavorites, deleteFromFavorites } = favorites.actions