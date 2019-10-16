import React, { useState, useContext } from 'react';
import TodoItem from './todo-item';
import { TODO_ADD, TODO_DELETE_TASK, TODO_EDIT, TODO_TOGGLE_DONE } from '../reducers/todo-reducer';
import TodoContext from '../contexts/TodoContext';

const Todos = () => {

    const [todos, dispatch] = useContext(TodoContext);
    const [newTodoDescription, setNewTodoDescription] = useState('');

    const updateNewTodo = (e) => {
        setNewTodoDescription(e.target.value)
    };

    const keyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        };
    }

    const addTodo = () => {
        if (newTodoDescription == null || newTodoDescription === '') { return; }

        setNewTodoDescription('');
        dispatch({ type: TODO_ADD, payload: { description: newTodoDescription } });
    }

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
                        <TodoItem item={item} key={item.id} onEdit={editTodo} onDelete={deleteTodo} toggleDone={toggleDone} />
                    )
                })
            }
            <div className="actions">
                <input
                    value={newTodoDescription}
                    onChange={updateNewTodo}
                    onKeyPress={keyPress}
                    placeholder="Enter new todo and press enter" />
            </div>
        </div >
    )
}

export default Todos;