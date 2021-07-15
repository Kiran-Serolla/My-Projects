import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../store/todoSlice';

const Todo = ({text,id}) => {
    const dispatch = useDispatch();
    const completedTask = ()=>{
        dispatch(completeTodo(id));
    };
    return (
        <div className ="tasks">
           <span>{text}</span> 
           <button onClick = {completedTask}>Completed</button>
        </div>
    )
}

export default Todo;
