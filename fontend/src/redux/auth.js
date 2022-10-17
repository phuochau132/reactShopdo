import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: "Auth",
    initialState: {
        login: {
            isFetching: false,
            currentUser: {},
            error: false,
        },
        register: {
            isFetching: false,
            error: false,
            success: false
        },
        delete: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            console.log(123);
            state.login.isFetching = false;
            state.login.currentUser = action.payload
        },
        loginFail: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.success = false
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.success = true
        },
        registerFail: (state) => {
            state.register.isFetching = false;
            state.register.error = true
        },
        deleteStart: (state) => {
            state.delete.isFetching = true
        },
        deleteSuccess: (state) => {
            state.delete.isFetching = false;
            state.delete.success = true
        },
        deleteFail: (state) => {
            state.delete.isFetching = false;
            state.delete.error = true
        }


    }
})

export const { loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail, deleteStart, deleteSuccess, deleteFail } = auth.actions
export default auth