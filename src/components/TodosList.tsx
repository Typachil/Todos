import { List } from '@mui/material';
import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks/redux';
import visible from '../store/enumVisible';
import { Todo } from '../store/reducerTodo';
import TodoItem from './TodoItem';

const TodosList = () => {
    const {list, visibleTodos} = useAppSelector(state => state.todos)

    const filteredList = (list:Todo[]) => {
        return list.filter((item) => {
            if(visibleTodos === visible.Active){
                return !item.completed
            }
            if(visibleTodos === visible.Completed){
                return item.completed
            }
            return item;
        })
    }

    const memoFilteredList = useMemo(() => filteredList(list), [list, visibleTodos])

    if(visibleTodos === visible.Completed && !memoFilteredList.length){
        return (
            <div className='todos-list__empty-text'>Complete your todos</div>
        )
    }

    if(!memoFilteredList.length){
        return (
            <div className='todos-list__empty-text'>Add new todos</div>
        )
    }

    return (
        <List>
            {memoFilteredList.map((item) => {
                const {id,title,completed} = item
                return (
                    <TodoItem key={id} id={id} title={title} completed={completed} />
                )
            })}
        </List>
    )
}

export default TodosList;
