import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { usersReducer, filterReducer } from './reduceres';

const contactsReducer = combineReducers({
    items: usersReducer,
    filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store)