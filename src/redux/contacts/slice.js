import { createSlice,} from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./operations";
import {logout} from "../auth/operations";
//import { selectContacts} from './selectors'

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const sliceContact = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null  
    },
    extraReducers: builder => {
      builder
        .addCase(fetchContacts.pending, handlePending)

        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
          state.error = null;
        })

        .addCase(fetchContacts.rejected, handleRejected)

        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })

        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(contact => contact.id !== action.payload);
            state.loading = false;
            state.error = null;
    })
    .addCase(logout.fulfilled, (state) => {
        state.items = []; 
        state.loading = false;
        state.error = null;
      });
  },
});

//export const {addContact, deleteContact, fetchInProgress, fetchError } = sliceContact.actions;
export default sliceContact.reducer;