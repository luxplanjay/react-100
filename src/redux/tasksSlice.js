import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./tasksOps";
import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
    a: 1,
    b: 2,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, state => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectTasks = state => state.tasks.items;

export const selectLoading = state => state.tasks.loading;

export const selectError = state => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log("selectVisibleTasks");
    return tasks.filter(task =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

export const selectSum = createSelector(
  [state => state.tasks.a, state => state.tasks.b],
  (a, b) => {
    console.log("selectSum");
    return a + b;
  }
);

export default slice.reducer;

// export const selectVisibleTasks = state => {
//   console.log("selectVisibleTasks");

//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };
