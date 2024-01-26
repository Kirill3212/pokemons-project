import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../NameSpace";

type InitialState = {
    history: []
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
        // updateHistory: (state, action) => {
        //     state.history.push(action.payload)
        // }
    }
})

export const { setHistory, clearHistory } = history.actions