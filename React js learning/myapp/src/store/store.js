import {configureStore} from '@reduxjs/toolkit'


// const store = configureStore(rootReducer)

import rootReducer from "./reducer";


// for using localStorage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Persistence configuration
const persistConfig = {
    key: 'root',
    storage,
}

// Wrap your existing reducer with persistence
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  // reducer: rootReducer,
  // for local storage
  reducer: persistedReducer,
}) //creating a store


// Create persistor
export const persistor = persistStore(store)

export default store;
