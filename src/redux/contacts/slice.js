import { createSlice, createSelector } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from "./operation";
import { selectNameFilter } from "../filters/slice";

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
    });    
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) =>  state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], (contacts, filter) => 
    contacts.filter(contact=>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

//export const {addContact, deleteContact, fetchInProgress, fetchError } = sliceContact.actions;
export default sliceContact.reducer;