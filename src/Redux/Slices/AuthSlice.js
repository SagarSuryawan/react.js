import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role")  || "",
    data: localStorage.getItem('data') || {}

}

export const createAccount = createAsyncThunk("")
// create is asynchoronous action

const AuthSlice = createSlice({
    name:'authSlicer',
    initialState,
    reducers:{}

})

export const {}  = AuthSlice.actions;
export default AuthSlice.reducer