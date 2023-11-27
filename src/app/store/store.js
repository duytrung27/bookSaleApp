import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../store/features/book.slice";
import searchReducer from "../store/features/search.slice";
import bookDeatilSlice from "../store/features/book-detail.slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    search: searchReducer,
    detail: bookDeatilSlice,
  },
});
