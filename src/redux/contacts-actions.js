import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './contacts-types';

//* Через классы
// const AddContact = newContact => ({
//   type: types.ADD,
//   payload: {
//     id: shortid(),
//     newContact,
//   },
// });

//* Create Action
// const AddContact = createAction('Contact/addContact', ({ name, number }) => {
//   return {
//     payload: {
//       id: shortid(),
//       number,
//       name,
//     },
//   };
// });

// const deleteContact = createAction('Contact/deleteContact');

// const deleteContact = contact => ({
//   type: types.DELETE,
//   payload: contact,
// });

const changeFilter = createAction('Contact/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const fetchContactRequest = createAction('Contacts/fetchContactRequest');
const fetchContactSuccess = createAction('Contacts/fetchContactSuccess');
const fetchContactError = createAction('Contacts/fetchContactError');

const addContactRequest = createAction('Contacts/addContactsRequest');
const addContactSuccess = createAction('Contacts/addContactsSuccess');
const addContactError = createAction('Contacts/addContactsError');

const deleteContactRequest = createAction('Contacts/deleteContactRequest');
const deleteContactSuccess = createAction('Contacts/deleteContactSuccess');
const deleteContactError = createAction('Contacts/deleteContactError');

const contactsActions = {
  changeFilter,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default contactsActions;
