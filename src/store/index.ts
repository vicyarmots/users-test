// libraries
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// redux-persist config storage
import storage from 'redux-persist/lib/storage';
import {
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   WebStorage,
} from 'redux-persist';

// redux slices
import UserListSlice from './users/UserListSlice';

interface PersistConfig {
   key: string;
   version: number;
   storage: WebStorage;
}

const persistConfig: PersistConfig = {
   key: 'root',
   version: 1,
   storage,
};

const rootReducer = combineReducers({
   UserListSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () =>
   configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [
                  FLUSH,
                  REHYDRATE,
                  PAUSE,
                  PERSIST,
                  PURGE,
                  REGISTER,
               ],
            },
         }),
   });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
