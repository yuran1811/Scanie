import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import imgSourcesReducer from './imgSourcesSlice';
import judgeSourcesReducer from './judgeSourcesSlice';
import scoreGroupsReducer from './scoreGroupsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      imgSources: imgSourcesReducer,
      scoreGroups: scoreGroupsReducer,
      // judgeSources: judgeSourcesReducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
