import { createSlice } from "@reduxjs/toolkit";

const searchedVideos = createSlice({
    name: "SearchVideos",

    initialState :{
        videos: []
    },

    reducers: {
        searchForVideos : (state, action) => {
            
        }
    }
})