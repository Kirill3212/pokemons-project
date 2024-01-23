import { createListenerMiddleware } from "@reduxjs/toolkit";
import { localStorageHelpers } from '../utils/localStorageHelpers';

import { logIn } from "./slices/userSlice";
import { init } from "./actions/init";

const localStorageListener = createListenerMiddleware()

localStorageListener.startListening({
    actionCreator: init,

    effect: (action, listenerApi) => {
        // Action doest not fire on reload
        console.log('fire action')
        action.payload = undefined;
        const email = localStorageHelpers.getAuth();
        if(email){
            const user = localStorageHelpers.getUser(email);
            listenerApi.dispatch(logIn(user))
        }
    }
})

localStorageListener.startListening({
    actionCreator: logIn,

    effect: (action) => {
        localStorageHelpers.setUser(action.payload.email, action.payload)
        localStorageHelpers.setAuth(action.payload.email)
    }
})

export { localStorageListener }