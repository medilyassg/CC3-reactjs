import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const gettodos=createAsyncThunk(
    'todos/gettodos',
    async()=>{
        const response=await axios.get('https://dummyjson.com/todos')
        return response.data
    }
)
const TodoSlice=createSlice({
    name:'todos',
    initialState:{
        data:[],
        loading:'idle',
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(gettodos.pending,(state,action)=>{
            if(state.loading==='idle'){
                state.loading='pending'
            }
        })
        builder.addCase(gettodos.fulfilled,(state,action)=>{
            if(state.loading==='pending'){
                state.loading='idle'
                state.data=action.payload
            }
        })
        builder.addCase(gettodos.rejected,(state,action)=>{
            if(state.loading==='pending'){
                state.loading='idle'
                state.error='error ocured'
            }
        })

    }

})


export default TodoSlice.reducer