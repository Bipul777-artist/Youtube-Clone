import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "Search",

    initialState : {
        searchInput: "",
        searchSuggestionsData : null,
        popularVideos : null,
        
    },

    reducers : {
        cacheResults : (state, action) => {
            state  = Object.assign(state, action.payload);
        },
        searchedResults : (state, action) => {
            state = Object.assign(state, action.payload);
        },
        getSearchSuggestionsData : (state, action) =>   {
            state.searchSuggestionsData = action.payload;
       },
        getVideos : (state, action) => {
            state.popularVideos = action.payload;
       },
        getSearchInput : (state, action) => {
            state.searchInput = action.payload;
        },
        clearSearchInput : (state, action) => {
            state.searchInput = "";
        }
        
    }

});

export const {cacheResults, searchedResults, getSearchInput, clearSearchInput, getSearchSuggestionsData, getVideos} = searchSlice.actions;

export default searchSlice.reducer;



