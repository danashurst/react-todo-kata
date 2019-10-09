import React, { useState, useReducer } from 'react';
import TodoItem from './todo-item';
import mock_todos from '../mock-data/mock-todos';

const Todos = () => {
    const [todos, setTodos] = useState(mock_todos)

    const [newItemDescription, setNewItemDescription] = useState('');

    const updateNewItem = (e) => {
        setNewItemDescription(e.target.value)
    };


    const addItem = () => {
        if (newItemDescription == null || newItemDescription === '') { return; }

        const id = todos.length + 1;
        const newItem = { id, description: newItemDescription, done: false }
        setTodos([...todos, newItem]);
        setNewItemDescription('');
    }

    const deleteItem = (delete_item) => {
        setTodos(todos.filter(item => item.id !== delete_item.id))
    }

    const editItem = (edit_item) => {
        const description = prompt("Edit value", edit_item.description);
        if (description == null || description === '') {
            return;
        }
        const editedItem = { ...edit_item, description };
        setTodos(todos.map(item => {
            return item.id === edit_item.id ? editedItem : item
        }))
    }

    const toggleComplete = (complete_item) => {
        const completeItem = { ...complete_item, done: !complete_item.done };
        setTodos(todos.map(item => {
            return item.id === complete_item.id ? completeItem : item
        }))
    };

    const removeCompleteItems = () => {
        setTodos(todos.filter(item => !item.done))
    };

    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <React.Fragment>
                            <TodoItem item={item} key={item.id} onEdit={editItem} onDelete={deleteItem} onComplete={toggleComplete} />
                        </React.Fragment>
                    )
                })
            }
            <hr />
            <input
                value={newItemDescription}
                onChange={updateNewItem}
                placeholder="Enter new todo item" />
            <button onClick={addItem}>Add New Item</button>
            <button onClick={removeCompleteItems}>Remove complete items</button>
        </div>
    )
}

export default Todos;