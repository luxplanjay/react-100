import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

const balancePersistConfig = {
  key: "balanceValue",
  storage,
  whitelist: ["value"],
};

const pBalanceReducer = persistReducer(balancePersistConfig, balanceReducer);

const localePersistConfig = {
  key: "langhaha",
  storage,
  whitelist: ["lang"],
};

const pLocaleReducer = persistReducer(localePersistConfig, localeReducer);

export const store = configureStore({
  reducer: {
    balance: pBalanceReducer,
    locale: pLocaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
