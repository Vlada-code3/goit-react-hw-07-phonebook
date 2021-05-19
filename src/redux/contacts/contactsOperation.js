import axios from "axios";
import { setContactsLoading, setError } from "./contactsAction";

import { addContact, deleteContact, getAllContacts } from "./contactsAction";

const addContactOperation = contact => async dispatch => {
  dispatch(setContactsLoading());
  try {
    const { data } = await axios.post(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json`, contact);
    dispatch(addContact({ ...contact, id: data.name }));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

const deleteContactsOperation = id => async dispatch => {
  dispatch(setContactsLoading());
  try {
    await axios.delete(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts/${id}.json`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

const getAllContactsOperation = () => async dispatch => {
  dispatch(setContactsLoading());
  try {
    const { data } = await axios.get(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json`);
    if (data) {
      const contacts = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      dispatch(getAllContacts(contacts));
    }
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactsLoading());
  }
};

export { addContactOperation, deleteContactsOperation, getAllContactsOperation };
