import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice.js";
import filtersReducer from "./filters/slice"
import { authReducer } from './auth/slice';

export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
      auth: authReducer,
    }
  });