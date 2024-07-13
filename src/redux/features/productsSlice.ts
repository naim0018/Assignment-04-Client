import { createSlice } from "@reduxjs/toolkit"



const initialState ={
    category : '',
    sortOption:'createdAt'
}

const productSlice = createSlice({
    name:'products',
    initialState:initialState,
    reducers:{

        setCategory:(state,action)=>{
            state.category = action.payload
        },
        setSortOption:(state,action)=>{
            state.sortOption=action.payload
        },
       
    }
})
export const {setCategory,setSortOption} = productSlice.actions
export default productSlice.reducer