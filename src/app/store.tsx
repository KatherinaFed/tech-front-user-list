import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '../service/authApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)

export default store;