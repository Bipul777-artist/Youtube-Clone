import { createSlice } from "@reduxjs/toolkit";
import LiveChat from "../components/LiveChat";
import { LiveCommentCount } from "./constant";

const chatSlice = createSlice({
    name: 'chat',

    initialState:{
        messages : [],
    },

    reducers : {
        addMessage : (state, action) => {
          
            state.messages.splice(LiveCommentCount, 1);
            
            state.messages.unshift(action.payload);
        }
    }

});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;