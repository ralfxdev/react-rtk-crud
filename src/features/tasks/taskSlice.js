import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      /* alternative => [...state, action.payload] */
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if(taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      } else {
        console.log("Task Not Found")
      }
    }
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
