import React, { useState, useContext } from 'react';
import { TODO_ITEM_ADD } from '../../reducers/action-types';
import { ToDoListContext } from '../../contexts';
import './new-item-form.scss';

const NewItemForm = () => {
    const [,todoListItemsDispatch] = useContext(ToDoListContext);
    const [newItemState, newItemDispatch] = useState('');

    const onItemChange = (e) => {
        newItemDispatch(e.target.value);
    };

    const onItemSubmit = () => {
        const date = new Date();

        todoListItemsDispatch({
            type: TODO_ITEM_ADD,
            id: date.getMilliseconds(),
            message: newItemState,
            created: date
        });
    };

    return (
        <div className="form-container">
            <input 
                className="form-input" 
                value={newItemState} 
                onChange={onItemChange} />

            <button 
                className="form-button" 
                onClick={onItemSubmit}>Submit</button>
        </div>
    )
};

export default NewItemForm;