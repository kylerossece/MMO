// store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import newsReducer from './modules/news'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const newsPersistConfig = {
  key: 'news',
  storage,
}

const rootReducer = combineReducers({
  news: persistReducer(newsPersistConfig, newsReducer)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
