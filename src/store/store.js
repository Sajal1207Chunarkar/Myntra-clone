import {configureStore} from "@reduxjs/toolkit";
import bagSlice from "./slices/bagslice";
import authSlice from "./slices/authSlice";
const store = configureStore({
    reducer:{
        bag:bagSlice,
        auth:authSlice.reducer,
        //post:postSlice,
        //notification:notificationSlice,
        //messages:messagesSlice,
        //about:aboutSlice,

    }
})

export default store