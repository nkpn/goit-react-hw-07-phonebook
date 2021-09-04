import contactsActions from './contacts-actions';
// import {
//   APIAddContacts,
//   APIDeleteContacts,
//   APIfetchContacts,
// } from 'service/contacts-API';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

const fetchContact = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  // try {
  //   const data = await APIfetchContacts();
  //   dispatch(contactsActions.fetchContactSuccess(data));
  // } catch (error) {
  //   dispatch(contactsActions.fetchContactError(error));
  // }

  axios
    .get('/contacts')
    .then(response => {
      return dispatch(contactsActions.fetchContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(contactsActions.fetchContactError(error));
    });
};

const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post('/contacts/', contact)
    .then(response => {
      return dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(contactsActions.addContactError(error));
    });
  // try {
  //   const result = await APIAddContacts(data);
  //   dispatch(contactsActions.addContactSuccess(result));
  // } catch (error) {
  //   dispatch(contactsActions.fetchContactError(error));
  // }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios.delete(`/contacts/${id}`).then(() => {
    return dispatch(contactsActions.deleteContactSuccess(id));
  });

  // try {
  //   await APIDeleteContacts(id);
  //   dispatch(contactsActions.deleteContactSuccess(id));
  // } catch (error) {
  //   dispatch(contactsActions.deleteContactError(error));
  // }
};

const contactsOperations = {
  fetchContact,
  addContact,
  deleteContact,
};

export default contactsOperations;
