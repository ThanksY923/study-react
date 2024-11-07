import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    count2: 0,
  },
  reducers: {
    // 约等于case语句，action是dispatch时传入的参数
    increment: (state, { payload }) => {
      state.count += payload;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    increment2: (state) => {},
  },
});

export const { increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
