import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice( {
   name:"search",
   initialState:{
     // empty object ko initial state rakha
   },
   reducers:{
       cacheResult:(state,action) => {
          state = Object.assign(state,action.payload)
       }
   }
})

export const {cacheResult} = searchslice.actions;

export default searchslice.reducer;