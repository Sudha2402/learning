import { configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
    key: 'root', // Key for localStorage
    storage, // Uses localStorage
    // Optional: add whitelist if you only want to persist specific reducers
    // whitelist: ['value', 'user'] 

    // persist:root	{"value":"25","_persist":"{\"vers
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

// to remove multiple export errors.

// let store = configureStore({
//     reducer: persistedReducer
// }); //we have made it an object now. 

// let persistor = persistStore(store)

// // export default () => {

// //     // we want to put it outside the pass only name as export.

// //     //   let store = configureStore(persistedReducer)
// //     //   let persistor = persistStore(store)
// //     return { store, persistor }
// // }


// export {store , persistor};




export const createStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                },
            }),
    })

    const persistor = persistStore(store)

    return { store, persistor }
}

// Export the config for potential reuse
export { persistConfig }