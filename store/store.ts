"use client";
import candidateStatus from "./reducers/dashboard";
import rootReducer from "./reducers/theme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    rootReducer: rootReducer,
    candidateStatus: candidateStatus,
  },
  middleware: (getDefaultMiddlleware) =>
    getDefaultMiddlleware({
      serializableCheck: false,
    }),
});

export default store;
