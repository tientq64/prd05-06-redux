import { combineReducers, configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import counterSlide from './reducers/counter'
import userReducer from './reducers/user'

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['counter']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
   counter: counterSlide,
   user: userReducer
}))

export const store = configureStore({
   reducer: persistedReducer
})

export const persistor = persistStore(store)
