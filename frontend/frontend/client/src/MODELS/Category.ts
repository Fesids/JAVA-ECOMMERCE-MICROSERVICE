import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

import { Action } from "history"


export interface ICategory{

    id:number,
    name: string,
    available: boolean

}

