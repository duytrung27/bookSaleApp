import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../store/features/book.slice";
import searchReducer from "../store/features/search.slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    search: searchReducer,
  },
});
