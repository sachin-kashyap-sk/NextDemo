import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      title: "Todo In Next js",
    },
    {
      id: 2,
      title: "State Management",
    },
  ],
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ id: nanoid(), title: action.payload });
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export const selectedTodo = (state) => state.Todo.value;
export default TodoSlice.reducer;
