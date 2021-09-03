import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import contactsReducer from './contacts-reducer';

//* local storage пока не нужен
// const contactPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    //! Если не будет работать, обрати внимание сюда
    contacts: contactsReducer,
    // contacts: persistReducer(contactPersistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
