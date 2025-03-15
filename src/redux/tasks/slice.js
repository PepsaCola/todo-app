import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    columns:[],
    id:null,
    name:null,
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setColumn: (state, column) => {
            state.columns = column;
        }
    }
})