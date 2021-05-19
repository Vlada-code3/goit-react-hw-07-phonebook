import { createSelector } from "@reduxjs/toolkit";

const getContactSelector = state => state.contacts;
const filterContactSelector = state => state.filter;
const loaderContactSelector = state => state.isContactLoading;
const errorContactSelector = state => state.error;

const getFilteringContacts = createSelector(
  [getContactSelector, filterContactSelector],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
export { getContactSelector, filterContactSelector, loaderContactSelector, errorContactSelector, getFilteringContacts };
