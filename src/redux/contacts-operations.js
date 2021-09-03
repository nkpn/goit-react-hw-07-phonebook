import contactsActions from './contacts-actions';
import {
  APIAddContacts,
  APIDeleteContacts,
  APIfetchContacts,
} from 'service/contacts-API';
import axios from 'axios';

const fetchContact = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const data = await APIfetchContacts();
    dispatch(contactsActions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};

const addContact = data => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const result = await APIAddContacts(data);
    dispatch(contactsActions.addContactSuccess(result));
  } catch (error) {
    dispatch(contactsActions.fetchContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    await APIDeleteContacts(id);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

const contactsOperations = {
  fetchContact,
  addContact,
  deleteContact,
};

export default contactsOperations;
