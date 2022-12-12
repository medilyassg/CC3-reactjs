import { combineReducers } from "redux";
import UsersReducer from './UserSlice'
import TodoReducer from './TodoSlice'
import { configureStore } from "@reduxjs/toolkit";
const reducer=combineReducers({
    users:UsersReducer,
    todos:TodoReducer
})
const store= configureStore({reducer})

export default store