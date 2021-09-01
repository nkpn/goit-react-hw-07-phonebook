import contactsActions from './contacts-actions';
import { APIfetchContacts } from 'service/contacts-API';

const fetchContact = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  try {
    const contacts = await APIfetchContacts();
    dispatch(contactsActions.fetchContactSuccess());
  } catch (error) {
    dispatch(contactsActions.fetchContactError());
  }
};
