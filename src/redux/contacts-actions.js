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
const AddContact = createAction('Contacts/addContact', ({ name, number }) => {
  return {
    payload: {
      id: shortid(),
      number,
      name,
    },
  };
});

const deleteContact = createAction('Contacts/deleteContact');

// const deleteContact = contact => ({
//   type: types.DELETE,
//   payload: contact,
// });

const changeFilter = createAction('Contacts/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const fetchContactRequest = createAction('Contacts/fetchContactsRequest');

const fetchContactSuccess = createAction('Contacts/fetchContactsSuccess');

const fetchContactError = createAction('Contacts/fetchContactsError');

const contactsActions = {
  AddContact,
  deleteContact,
  changeFilter,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
};

export default contactsActions;
