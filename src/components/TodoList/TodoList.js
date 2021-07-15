import React from 'react';
import { useSelector } from 'react-redux';
import { todoSelectors } from '../../store/todoSlice';
import Todo from './Todo';


const TodoList = () => {
    const allTodos = useSelector(todoSelectors.selectEntities);
    const completedTodos = useSelector(state =>state.todos.completedTodos);

    const todoList = [];
    for (const id in allTodos){
        if(Object.hasOwnProperty.call(allTodos,id)){
            const todoItem = allTodos[id];
            todoList.push(<Todo
            key ={todoItem.id}
            id = {todoItem.id}
            text={todoItem.todo}></Todo>)
        }
    };
    const date = new Date();
    const completeList = completedTodos.map(item =>
    (<div key ={item.id}>
        <span>{item.todo}</span>
        <span className= "date"> done on :{date.toLocaleString()}</span>
    </div>));
    return (
        <div classname ="todo-container">
            <div>
            <h3>  Tasks todo: </h3>
            <p>Click on the 'completed' button when the task is done</p>
            <div>{todoList}</div>
            </div>
            <div>
            <h3>Completed Tasks :</h3>
            <div className="completed-list">{completeList}</div>
            </div>
            
        </div>
    )
}

export default TodoList
