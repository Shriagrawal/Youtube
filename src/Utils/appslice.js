import {createSlice}  from "@reduxjs/toolkit"

const appslice =  createSlice({
    name:"app",
    initialState: {
       ismenuopen:true,
       filtercards:false,
    },
    reducers:{
         tooglemenu: (state,action) =>
         {
           state.ismenuopen = !state.ismenuopen;
         },
         closemenu:(state,action) => 
         {
               state.ismenuopen = false;
         },
         searchforcards: (state,action) =>{
             state.filtercards = true;
         }
    }
})  

export const {tooglemenu,closemenu} = appslice.actions
export default appslice.reducer