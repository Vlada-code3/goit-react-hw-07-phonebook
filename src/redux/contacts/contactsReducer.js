import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  addContact,
  deleteContact,
  getAllContacts,
  filterContacts,
  setContactsLoading,
  setError,
  resetError
} from "./contactsAction";

export const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)],
  [getAllContacts]: (_, { payload }) => payload
});

export const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload
});

const contactLoaderReducer = createReducer(false, {
  [setContactsLoading]: state => !state
});

const contactErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => ""
});

const contactReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoadind: contactLoaderReducer,
  error: contactErrorReducer
});

export default contactReducer;
