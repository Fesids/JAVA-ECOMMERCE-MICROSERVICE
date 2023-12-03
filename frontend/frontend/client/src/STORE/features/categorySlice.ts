import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ICategory } from "../../MODELS/Category";


/*export interface ICategory{
    id:number,
    name: string,
    available: boolean

}*/

interface CategoryState{
    categories: ICategory[];
    status: string,
    error: any

}

const initialState: CategoryState = {
    /*categories: [{
        id: 1,
        name: "teste",
        available: true
    }],*/
    categories: [],
    status: "idle",
    error: undefined
}


export const fetchCategories = createAsyncThunk(
    "category/list",
    async () =>{
        const response = await axios.get("http://127.0.0.1:8088/api/v1/category/all");
        const data = response.data;
        return data;
    }
)


export const saveCategory = createAsyncThunk(
    "category/save",
    async (data:Omit<ICategory, "id">, thunkAPI) =>{
        const response = await axios.post("http://127.0.0.1:8088/api/v1/category", data);
        return response.data;
    }
)


/*export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<{name: string, available:boolean}>) =>{
            state.categories.push({
                id: state.categories.length,
                name: action.payload.name,
                available: action.payload.available,
            });
        },
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchCategories.fulfilled, (state, action)=>{
            state.categories = action.payload;
        });

        builder.addCase(saveCategory.fulfilled, (state, action)=>{
            state.categories.push(action.payload);
        });
    },
});*/

export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{

        // fetch all categories
        builder.addCase(fetchCategories.pending, (state, action)=>{
            //state.categories = action.payload;
            state.status = 'loading';
            
        })
        .addCase(fetchCategories.fulfilled, (state, action) =>{
            state.status = 'succeded'
            state.categories = action.payload //state.categories.concat(action.payload)

        })
        .addCase(fetchCategories.rejected, (state, action) =>{
            state.status = 'failed'
            state.error = action.error.message
        })

        builder.addCase(saveCategory.fulfilled, (state, action)=>{
            state.categories.push(action.payload);
        });
    },
});


export default CategorySlice.reducer;

export const selectAllCategories = (state:RootState ) => state.category.categories;
//export const {addCategory} = CategorySlice.actions;















