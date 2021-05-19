import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const getAllContacts = createAction("contacts/getAllContacts");
export const filterContacts = createAction("contacts/filterContacts");

export const setError = createAction("contacts/setError");
export const resetError = createAction("contacts/resetError");
export const setContactsLoading = createAction("contacts/setContactsLoading");
