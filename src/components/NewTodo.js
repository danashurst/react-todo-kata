import React, { useState, useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import { TODO_ADD } from '../reducers/todo-reducer';
import './newTodo.scss';

const NewTodo = () => {

    const [, dispatch] = useContext(TodoContext);

    const [newTodoDescription, setNewTodoDescription] = useState('');

    const updateNewTodo = (e) => {
        setNewTodoDescription(e.target.value);
    };

    const addTodo = () => {
        if (newTodoDescription == null || newTodoDescription === '') { return; }

        setNewTodoDescription('');
        dispatch({ type: TODO_ADD, payload: { description: newTodoDescription } });
    };

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        };
        if (e.key === 'Escape') {
            setNewTodoDescription('');
        }
    }

    return (
        <div className="add-new">
            <input
                value={newTodoDescription}
                onChange={updateNewTodo}
                onKeyDown={keyDown}
                placeholder="Enter new todo and press enter" />
        </div>
    );
};

export default NewTodo;