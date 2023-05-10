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
  {
    id: "3",
    title: "Task 3",
    description: "Task 3 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      /* alternative => [...state, action.payload] */
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      } else {
        console.log("Task Not Found");
      }
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find(task => task.id === id)
      if (taskFound) {
        taskFound.title = title
        taskFound.description = description
      } else {
        console.log("Task Not Found");
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
