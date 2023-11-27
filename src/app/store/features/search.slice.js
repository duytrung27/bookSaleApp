import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/config";
import { STANDARD_OFFSET } from "../../utils/constants";
import { convertSearchBookData } from "../../utils/helpers";

const initialState = {
  searchBookList: [],
  isLoading: false,
  totalPage: 0,
};

export const getSearcBook = createAsyncThunk(
  "book/search",
  async (payload, thunkAPI) => {
    try {
      let page = payload.page || 1;
      let word = payload.word || "";

      const response = await axiosClient.get(
        `/search.json?q=${word}&page=${[page]}&limit=${STANDARD_OFFSET}`
      );
      const data = await response.data;
      if (data.docs) {
        const books = data.docs.map((book) => convertSearchBookData(book));

        // Caculate total page base on work_count
        let totalPage = data.num_found / STANDARD_OFFSET;
        totalPage = Number.isInteger(totalPage)
          ? totalPage
          : parseInt(totalPage) + 1;

        return {
          data: books,
          totalPage,
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSearcBook.pending, (state) => {
      state.isLoading = true;
      state.searchBookList = [];
    });
    builder.addCase(getSearcBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchBookList = action.payload.data;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(getSearcBook.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default searchSlice.reducer;
