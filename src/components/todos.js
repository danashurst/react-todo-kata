import React, { useState } from 'react';
import TodoItem from './todo-item';

const Todos = ({ todos, onAdd, onEdit, onDelete, onComplete, removeDone }) => {
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
        onAdd(newTodoDescription);
    }

    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <TodoItem item={item} key={item.id} onEdit={onEdit} onDelete={onDelete} onComplete={onComplete} />
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