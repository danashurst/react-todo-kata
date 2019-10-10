import React, { useState, useReducer } from 'react';
import TodoItem from './todo-item';
import mock_todos from '../mock-data/mock_todos';
import todo_reducer from '../reducers/todo_reducer';

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

    const removeCompleteItems = () => {
        dispatch({ type: "REMOVE_DONE" });
    };

    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <React.Fragment>
                            <TodoItem item={item} key={item.id} onEdit={editTodo} onDelete={deleteTodo} onComplete={toggleDone} />
                        </React.Fragment>
                    )
                })
            }
            <hr />
            <input
                value={newTodoDescription}
                onChange={updateNewTodo}
                onKeyPress={keyPress}
                placeholder="Enter new todo item" />
            <button onClick={addTodo}>Add New Item</button>
            <button onClick={removeCompleteItems}>Remove complete items</button>
        </div>
    )
}

export default Todos;