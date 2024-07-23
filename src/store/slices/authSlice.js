import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        isloading:false,
        error:false,
        userName:'',
    },
    reducers:{}
})
export default authSlice