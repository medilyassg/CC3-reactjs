import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getusers=createAsyncThunk(
    'users/getusers',
    async()=>{
        const response=await axios.get('https://dummyjson.com/users')
        return response.data
    }
)
const UserSlice=createSlice({
    name:'users',
    initialState:{
        data:[],
        loading:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getusers.pending,(state,action)=>{
            if(state.loading==='idle'){
                state.loading='pending'
            }
        })
        builder.addCase(getusers.fulfilled,(state,action)=>{
            if(state.loading==='pending'){
                state.loading='idle'
                state.data=action.payload
            }
        })
        builder.addCase(getusers.rejected,(state,action)=>{
            if(state.loading==='pending'){
                state.loading='idle'
                state.error='error ocured'
            }
        })

    }

})


export default UserSlice.reducer