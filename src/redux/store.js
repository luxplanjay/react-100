import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

export const store = createStore(rootReducer);
