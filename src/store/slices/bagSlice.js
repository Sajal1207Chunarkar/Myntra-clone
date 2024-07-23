import { createSlice } from "@reduxjs/toolkit";


const bagSlice=createSlice({
    name:'bag',
    initialState:{
        bagItems:[],
        loading:false,
        error:false,
        noOfItemsInBag:0
    },
    reducers:{
        addItemToBag:(state,action)=>{ 
            //state will contain initialstate
            //action will be an object which will have type and payload parameters
            state.bagItems.push(action.payload)
            state.noOfItemsInBag++
           

        } ,//this action will add item in the cart ,eventually in the bagitems array in bag slice
        removeItemFromBag:(state,action)=>{ 

        }//this action remove items from the cart,eventually remove value from bagitems array in bag slice
    }
})
export const {addItemToBag,removeItemFromBag}=bagSlice.actions
export default bagSlice.reducer