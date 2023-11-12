import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
  isLoading: boolean;
};

const initialState: CounterState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getDraws: (state: CounterState) => {
      state.isLoading = !state.isLoading
    },
  },
});

// Action creators are generated for each case reducer function
export const { getDraws } = appSlice.actions;

export default appSlice.reducer;
