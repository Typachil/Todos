import store from "../../store";
import { addTodo, removeTodos, toggleComplete } from "../../store/reducerTodo";

test('Adds a new Todo', () => {
  let state = store.getState().todos;
  const initialLengthTodos = state.list.length;

  store.dispatch(addTodo('12421441'));
  store.dispatch(addTodo('Todo todo Todo'));
  
  state = store.getState().todos;
  const newlyAddedTodo = state.list.find((todo) => todo.title === '12421441');
  const secondAddedTodo = state.list.find((todo) => todo.title === 'Todo todo Todo');

  expect(newlyAddedTodo?.title).toBe('12421441');
  expect(secondAddedTodo?.title).toBe('Todo todo Todo');
  expect(state.list.length).toBeGreaterThan(initialLengthTodos);
});

test('Deletes a completed todos', () => {
  let state = store.getState().todos;
  const initialBookCount = state.list.length;

  store.dispatch(toggleComplete(state.list[0].id))
  store.dispatch(removeTodos());
  state = store.getState().todos;

  expect(state.list.length).toBeLessThan(initialBookCount); // Checking if new length smaller than inital length
});