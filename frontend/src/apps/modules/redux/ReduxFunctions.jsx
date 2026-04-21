import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name: "ankur",
  age: 21,
  course: "bca",
}

export const customSlicer = createSlice({
  name: "ankur",
  initialState,
  reducers: {
    increaseAge: (state) => {
      state.age += 1
    },
    decrementAge: (state) => {
      state.age -= 1;
    },
    cart: (state) => {
      state.value += 1;
    }
  }
})

export const { increaseAge, decrementAge, cart } = customSlicer.actions;

export default customSlicer.reducer;