import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import React from 'react';
import { Todo, toggleComplete } from '../store/reducerTodo';
import { useAppDispatch } from '../hooks/redux';

const TodoItem: React.FC<Todo> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <ListItem
            key={id}
            disablePadding
            onClick={() => dispatch(toggleComplete(id))}
            className="todos-list__item"
        >
            <ListItemButton sx={{paddingLeft: '0px'}} role={undefined}>
                <ListItemIcon>
                    <Checkbox
                        checked={completed}
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={<CheckCircleOutlinedIcon color='success'/>}
            />
                </ListItemIcon>
                <ListItemText className={`todos-list__item-text ${completed && "todos-list__item-text_completed"}`} disableTypography id={id} primary={title} />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem;
