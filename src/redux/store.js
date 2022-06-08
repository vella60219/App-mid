import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userReducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

persistStore(store);