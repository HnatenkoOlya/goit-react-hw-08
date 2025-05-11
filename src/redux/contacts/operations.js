import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

axios.defaults.baseURL = "https://681386c2129f6313e2118f2d.mockapi.io";

export const fetchContacts =  createAsyncThunk ("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    }
    catch (error) {
        toast.error("Failed to fetch contacts.");
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const response = await axios.post ("/contacts", newContact);
        toast.success('Contact success add!');
        return response.data;
    } catch (error) {
        toast.error("Failed to add contact.");
        return thunkAPI.rejectWithValue(error.message);
    }
   
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        await axios.delete (`/contacts/${contactId}`);
        toast.success('Contact success delete!');
        return contactId
    } catch (error){
        toast.error("Failed to delete contact.");
        return thunkAPI.rejectWithValue(error.message);
    }
});