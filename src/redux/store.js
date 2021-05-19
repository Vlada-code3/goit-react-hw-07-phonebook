import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { contactsReducer, filterReducer } from "./contacts/contactsReducer";
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
