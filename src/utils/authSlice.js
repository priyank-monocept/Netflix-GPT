import { createSlice } from "@reduxjs/toolkit";

const authSlice  = createSlice({
name:'auth',
initialState: {
    user: null,
    is_authenticated: false,
},
reducers : {
    setUser: (state,action) => {
        state.user = action.payload;
        state.is_authenticated = true;
    },
    unsetUser: (state,action)=>{
        state.user = null;
        state.is_authenticated = false;
    }
},
})

export const {setUser, unsetUser} = authSlice.actions;
export default authSlice.reducer;
