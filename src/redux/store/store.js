import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import stateReducer from "../reducers/stateReducer";
import profileReducer from "../reducers/profileReducer";
import homePageReducer from "../reducers/homePageReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  global: stateReducer,
  home: homePageReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
