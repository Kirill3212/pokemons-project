import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../NameSpace";
import { State } from '../../types/store'

type InitialState = {
    authorizationStatus: boolean;
    email: string;
};

const initialState: InitialState = {
    authorizationStatus: false,
    email: '',
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
        logIn: (state, action) => {
            state.authorizationStatus = true;
            state.email = action.payload.email;
        },
        logOut: (state) => {
            state.authorizationStatus = false;
        },
  }
});

export const getAuthStatusSelector = (state: State) => state[NameSpace.User].authorizationStatus;
export const getEmailSelector = (state: State) => state[NameSpace.User].email;

export const { logIn, logOut } = user.actions

