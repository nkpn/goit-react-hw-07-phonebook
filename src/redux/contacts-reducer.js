import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
// import types from './contacts-types';
import actions from './contacts-actions';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

//* CreateReducer
const items = createReducer([], {
  // [actions.AddContact]: (state, { payload }) => [...state, payload],
  // [actions.deleteContact]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
  [contactsActions.fetchContactSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactError]: (_, action) => action.payload,
  [contactsActions.fetchContactRequest]: (_, action) => null,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
