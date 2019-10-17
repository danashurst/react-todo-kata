import React, { useState, useContext } from 'react';
import TodoTask from './TodoTask';
import { TODO_DELETE_TASK, TODO_EDIT, TODO_TOGGLE_DONE } from '../reducers/todo-reducer';
import TodoContext from '../contexts/TodoContext';
import NewTodo from './NewTodo';

const Todos = () => {

    const [todos, dispatch] = useContext(TodoContext);

    const deleteTodo = (deleteTodo) => {
        dispatch({ type: TODO_DELETE_TASK, payload: { deleteTodo } });
    }

    const editTodo = (editTodo, editDescription) => {
        dispatch({ type: TODO_EDIT, payload: { editTodo, editDescription } });
    }

    const toggleDone = (toggleTodo) => {
        dispatch({ type: TODO_TOGGLE_DONE, payload: { toggleTodo } })
    };


    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <TodoTask task={item} key={item.id} onEdit={editTodo} onDelete={deleteTodo} onToggleDone={toggleDone} />
                    )
                })
            }
            <NewTodo />
        </div >
    )
}

export default Todos;