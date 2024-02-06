import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../NameSpace";
import { State } from "../../types/store";
import { SinglePokemonData } from "../../types/pokemonData";

type InitialState = {
    history: SinglePokemonData[]
}

const initialState: InitialState = {
    history: []
}

export const history = createSlice({
    name: NameSpace.History,
    initialState,
    reducers: {
        setHistory: (state, action) => {
            state.history = action.payload
        },
        clearHistory: (state) => {
            state.history = []
        },
        updateHistory: (state, action) => {
            const notExist = state.history.every((item: SinglePokemonData) => item.id !== action.payload.id)
            if(notExist){
                state.history.push(action.payload)
            }
        }
    }
})

export const getHistorySelector = (state: State) => state[NameSpace.History].history;

export const { setHistory, clearHistory, updateHistory } = history.actions