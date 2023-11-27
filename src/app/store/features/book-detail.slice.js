import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../utils/config";
import { convertBookDeail } from "../../utils/helpers";
import { toast } from "react-toastify";

const initialState = {
  bookData: {},
  isLoading: false,
};

export const getBookDetail = createAsyncThunk(
  "bookDetail/get",
  async (id, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/works/${id}.json`);
      const data = await response.data;
      if (data) {
        const books = convertBookDeail(data);
        return books;
      }
    } catch (error) {
      toast.error("No book found. Please try again !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bookDetailSlice = createSlice({
  name: "bookDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBookDetail.pending, (state) => {
      state.isLoading = true;
      state.bookData = {};
    });
    builder.addCase(getBookDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookData = action.payload;
    });
  },
});

export default bookDetailSlice.reducer;
