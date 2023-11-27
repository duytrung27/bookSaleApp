import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/config";
import { convertBookData } from "../../utils/helpers";
import { STANDARD_OFFSET } from "../../utils/constants";

const initialState = {
  // popular
  popularList: [],
  isLoadingPopular: false,
  totalPage: 0,
  // recommend
  recommendList: [],
  isLoadingRecommened: false,

  // new
  newBooksList: [],
  isLoadingNewBooks: false,

  // like
  likeBooksList: [],
  isLoadingLikeBooks: false,
};

export const getPopularBooks = createAsyncThunk(
  "book/popular",
  async (payload, thunkAPI) => {
    try {
      let offset = 0;
      let type = "love";
      if (payload) {
        offset = payload.offset || 0;
        type = payload.type || type;
      }

      const response = await axiosClient.get(
        `/subjects/${type}.json?offset=${offset}`
      );
      const data = await response.data;
      if (data.works) {
        const books = data.works.map((book) => convertBookData(book));

        // Caculate total page base on work_count
        let totalPage = data.work_count / STANDARD_OFFSET;
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

export const getRecommendBooks = createAsyncThunk(
  "book/recommend",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/subjects/trend.json?`);
      const data = await response.data;
      if (data.works) {
        const books = data.works.map((book) => convertBookData(book));
        return books;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getNewBooks = createAsyncThunk(
  "book/newStory",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/subjects/new.json?`);
      const data = await response.data;
      if (data.works) {
        const books = data.works.map((book) => convertBookData(book));
        return books;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getLikeBooks = createAsyncThunk(
  "book/mostLike",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/subjects/like.json?`);
      const data = await response.data;
      if (data.works) {
        const books = data.works.map((book) => convertBookData(book));
        return books;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    // POPULAR BOOKS
    builder.addCase(getPopularBooks.pending, (state) => {
      state.isLoadingPopular = true;
      state.popularList = [];
    });
    builder.addCase(getPopularBooks.fulfilled, (state, action) => {
      state.isLoadingPopular = false;
      state.popularList = action.payload.data;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(getPopularBooks.rejected, (state) => {
      state.isLoadingPopular = false;
    });

    // RECOMMEND BOOKS
    builder.addCase(getRecommendBooks.pending, (state) => {
      state.isLoadingRecommened = true;
    });
    builder.addCase(getRecommendBooks.fulfilled, (state, action) => {
      state.isLoadingRecommened = false;
      state.recommendList = action.payload;
    });
    builder.addCase(getRecommendBooks.rejected, (state) => {
      state.isLoadingRecommened = false;
    });

    // NEW BOOKS
    builder.addCase(getNewBooks.pending, (state) => {
      state.isLoadingNewBooks = true;
    });
    builder.addCase(getNewBooks.fulfilled, (state, action) => {
      state.isLoadingNewBooks = false;
      state.newBooksList = action.payload;
    });
    builder.addCase(getNewBooks.rejected, (state) => {
      state.isLoadingNewBooks = false;
    });

    // LIKE BOOKS
    builder.addCase(getLikeBooks.pending, (state) => {
      state.isLoadingLikeBooks = true;
    });
    builder.addCase(getLikeBooks.fulfilled, (state, action) => {
      state.isLoadingLikeBooks = false;
      state.likeBooksList = action.payload;
    });
    builder.addCase(getLikeBooks.rejected, (state) => {
      state.isLoadingLikeBooks = false;
    });
  },
});

export const { clearState } = bookSlice.actions;
export default bookSlice.reducer;
