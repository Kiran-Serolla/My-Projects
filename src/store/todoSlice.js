import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) =>state.todos);

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoAdapter.getInitialState({
        completedTodos:[],
    }),
    reducers:{
        addTodo: todoAdapter.addOne,
        completeTodo(state,action){
            state.completedTodos.push(state.entities[action.payload]);
            todoAdapter.removeOne(state,action)
        }
    },
});
export const { addTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer;