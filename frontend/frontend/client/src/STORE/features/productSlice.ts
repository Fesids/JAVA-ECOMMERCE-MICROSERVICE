import axios from "axios";
import { IProduct } from "../../MODELS/Product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProductState{
    products: IProduct[],
    status: string,
    error: any
}

const initialState: ProductState={
    products: [],
    status: "idle",
    error: undefined
}

export const fetchProducts = createAsyncThunk(
    "product/list",
    async () =>{
        const response = await axios.get("http://127.0.0.1:8088/api/v1/product/all");
        const data = response.data;
        return data;
    }
)

export const saveProduct = createAsyncThunk(
    "product/save",
    async (data:Omit<IProduct, "id">, thunkAPI) =>{
        const response = await axios.post("http://127.0.0.1:8088/api/v1/product/new", data);
        return response.data;
    }
)

export const fetchProductById = createAsyncThunk(
    "product/fetchById",
    async (productId:  number, thunkAPI) =>{
        const response = await axios.get(`http://127.0.0.1:8088/api/v1/product/${productId}`);
        return response.data;
    }
)



export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        // fetch all products
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) =>{
            state.status = 'succeded',
            state.products= action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status = "rejected",
            state.error = action.error.message
        });

        // get product by id
        builder.addCase(fetchProductById.fulfilled, (state, action)=>{
            state.products.push(action.payload);
        })



    }
})

export default ProductSlice.reducer;

export const selectAllProducts = (state:RootState) => state.product.products;
