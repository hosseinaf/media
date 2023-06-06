import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../store/slices/usersSlice";


export const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export * from './thunks/fetchUsers'
  export * from './thunks/addUser'
  export * from './thunks/removeUser'