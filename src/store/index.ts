import { configureStore } from "@reduxjs/toolkit";
import reducerTodo from "./reducerTodo";

const store = configureStore({
    reducer: {
        todos: reducerTodo
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;