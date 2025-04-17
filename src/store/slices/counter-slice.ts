import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      title: "test1",
      isDone: false,
    },
  ],
  reducers: {
    addItem: (
      state,
      action: {
        payload: {
          title: string;
          userId: string;
          username: string;
          description: string;
        };
      }
    ) => (state = [...state, { ...action.payload, isDone: false }]),
  },
});

export const { addItem } = userSlice.actions;

export default userSlice.reducer;
