import { combineReducers } from "@reduxjs/toolkit";
import bidsSlice from "./bidPriceSlice";

const rootReducer = combineReducers({
  bidsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
