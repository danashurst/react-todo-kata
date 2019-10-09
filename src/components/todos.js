import React, { useState, useReducer } from 'react';
import TodoItem from './todo-item';
import mock_todos from '../mock-data/mock-todos';

const Todos = () => {
    const [items, setItems] = useState(mock_todos)

    const [newItemDescription, setNewItemDescription] = useState('');

    const updateNewItem = (e) => {
        setNewItemDescription(e.target.value)
    };


    const addItem = () => {
        const id = items.length + 1;
        const newItem = { id, description: newItemDescription, done: false }
        setItems([...items, newItem]);
        setNewItemDescription('');
    }

    const deleteItem = (delete_item) => {
        setItems(items.filter(item => item.id !== delete_item.id))
    }

    const editItem = (edit_item) => {
        const description = prompt("Edit value", edit_item.description);
        if (description == null || description === '') {
            return;
        }
        const editedItem = { ...edit_item, description };
        setItems(items.map(item => {
            return item.id === edit_item.id ? editedItem : item
        }))
    }

    return (
        <div>
            {
                items.map(item => {
                    return (
                        <React.Fragment>
                            <TodoItem item={item} key={item.id} onEdit={editItem} onDelete={deleteItem} />
                            <br />
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
        </div>
    )
}

export default Todos;