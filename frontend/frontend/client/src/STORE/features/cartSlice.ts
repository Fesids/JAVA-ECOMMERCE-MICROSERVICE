import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../MODELS/Cart";
import axios from "axios";

interface CartState{
    carts: ICart[],
    status: string,
    error: any
}

const initialState: CartState = {
    carts: [],
    status: "idle",
    error: undefined
}

export const fetchCarts = createAsyncThunk(
    "cart/list",
    async () =>{
        const response = await axios.get("http://127.0.0.1:8088/api/v1/cart")
        const data = response.data;
        return data;
    }
)

export const fetchCartByUserId = createAsyncThunk(
    "cart/fetchByUserId",
    async (userId:number, thunkAPI) =>{
        const response = await axios.get(`http://127.0.0.1:8088/api/v1/cart/user/${userId}`);
        const data = response.data;
        return data;
    }
)

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{

        builder.addCase(fetchCarts.pending, (state, action) =>{
            state.status = 'loading'
        })
        .addCase(fetchCarts.fulfilled, (state, action) =>{
            state.status = 'succeded',
            state.carts= action.payload;
        })
        .addCase(fetchCarts.rejected, (state, action)=>{
            state.status = "rejected",
            state.error = action.error.message
        });


        // get cart by user id
        builder.addCase(fetchCartByUserId.fulfilled, (state, action)=>{
            state.carts.push(action.payload)
        })

    }
})