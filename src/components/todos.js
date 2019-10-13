import React, { useState, useReducer } from 'react';
import TodoItem from './todo-item';
import mock_todos from '../mock-data/mock_todos';
import todo_reducer from '../reducers/todo_reducer';
import { FiDelete } from 'react-icons/fi';

const Todos = () => {
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [todos, dispatch] = useReducer(todo_reducer, mock_todos);

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

        dispatch({ type: "ADD", payload: { description: newTodoDescription } });
        setNewTodoDescription('');
    }

    const deleteTodo = (deleteTodo) => {
        dispatch({ type: "DELETE", payload: { deleteTodo } });
    }

    const editTodo = (editTodo) => {
        const editDescription = prompt("Edit value", editTodo.description);
        if (editDescription == null || editDescription === '') {
            return;
        };
        dispatch({ type: "EDIT", payload: { editTodo, editDescription } });
    }

    const toggleDone = (toggleTodo) => {
        dispatch({ type: "TOGGLE_DONE", payload: { toggleTodo } })
    };

    const removeDone = () => {
        dispatch({ type: "REMOVE_DONE" })
    };

    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <TodoItem item={item} key={item.id} onEdit={editTodo} onDelete={deleteTodo} onComplete={toggleDone} />
                    )
                })
            }
            <div className="actions">
                <input
                    value={newTodoDescription}
                    onChange={updateNewTodo}
                    onKeyPress={keyPress}
                    placeholder="Enter new todo and press enter" />
                <div className="remove-done"><FiDelete onClick={removeDone} /></div>
            </div>
        </div >
    )
}

export default Todos;