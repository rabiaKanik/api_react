import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    token:""
  }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers :{
        setUserToken:(state,action)=>{
            state.token=action.payload
        }
    }

})

export const {setUserToken} = userSlice.actions

export default userSlice.reducer