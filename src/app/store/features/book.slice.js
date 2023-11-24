import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/config";

const initialState = {
  data: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "book/searchBook",
  async (user, thunkAPI) => {
    try {
      const { username, password } = user;
      let response = await axiosClient.post(`/login`, {
        username,
        password,
      });
      let data = await response.data;
      if (data) {
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.error = action.payload.error;
    });
  },
});

export const { clearState } = bookSlice.actions;
export default bookSlice.reducer;
