import { Input, InputAdornment } from '@mui/material';
import React, { useMemo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './todos.scss';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addTodo, changeVisible, removeTodos, Todo, visible } from '../store/reducerTodo';
import TodosList from './TodosList';


const TodosForm = () => {
    const [valueInput, setValueInput] = useState('');
    const dispatch = useAppDispatch();
    const { list, visibleTodos } = useAppSelector(state => state.todos);

    const quantityTodoCompleted = (list: Todo[]) => {
        return list.filter(item => !item.completed).length;
    };
    const quantity = useMemo(() => quantityTodoCompleted(list), [list])

    return (
        <div className='todos-list'>
            <Input
                sx={{ fontSize: "1.5vmax" }}
                className='todos-list__input'
                placeholder="What needs to be done?"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.code === "Enter" && valueInput) {
                        dispatch(addTodo(valueInput));
                        setValueInput('');
                    }
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <ExpandMoreIcon />
                    </InputAdornment>
                }
            />
            <TodosList />
            <div className='todos-buttonsGroup'>
                <div className='todos-buttonsGroup__quantity'>{quantity} items left</div>
                <div className='todos-buttonsGroup__filters'>
                    <button className={`todos-buttonsGroup__button ${visibleTodos === visible.All && 'todos-buttonsGroup__button_active'}`} 
                        onClick={() => dispatch(changeVisible(visible.All))}>All</button>
                    <button className={`todos-buttonsGroup__button ${visibleTodos === visible.Active && 'todos-buttonsGroup__button_active'}`} 
                        onClick={() => dispatch(changeVisible(visible.Active))}>Active</button>
                    <button className={`todos-buttonsGroup__button ${visibleTodos === visible.Completed && 'todos-buttonsGroup__button_active'}`} 
                        onClick={() => dispatch(changeVisible(visible.Completed))}>Completed</button>
                </div>
                <button className='todos-buttonsGroup__button' onClick={() => dispatch(removeTodos())}>Clear completed</button>
            </div>
        </div>
    )
}

export default TodosForm;