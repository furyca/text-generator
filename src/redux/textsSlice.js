import { createSlice } from "@reduxjs/toolkit";

export const getText = createAsyncThunk(
    "paragraphs/getTextByCount",
    async ({ count, showHTML }) => {
      const res = await fetch(
        `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${showHTML}`
      ).then((data) => data.text());
      return res;
    }
  );

export const textsSlice = createSlice({
    name: 'paragraphs',
    initialState:{
        count: 4,
        showHTML: false,
        isLoading: false,

    },
    reducers: {
        changeCount: (state, action) => {
            state.count = action.payload;
        },
        changeShowHTML: (state, action) => {
            state.showHTML = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getText.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(getText.fulfilled, (state, action) => {
          state.text = action.payload;
          state.isLoading = false;
        });
      },
})

export const {changeCount, changeShowHTML} = textsSlice.actions;
export default textsSlice.reducer;