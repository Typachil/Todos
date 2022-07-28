import store from "../../store";
import { addTodo } from "../../store/reducerTodo";

test('Adds a new book', () => {
  let state = store.getState().todos;
  const initialLengthTodos = state.list.length;

  store.dispatch(addTodo('Test test'));
  state = store.getState().todos;
  const newlyAddedTodo = state.list.find((todo) => todo.title === 'Test test');
  expect(newlyAddedTodo?.title).toBe('Test test');
  expect(state.list.length).toBeGreaterThan(initialLengthTodos);
});