import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../store/features/book.slice";
export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
