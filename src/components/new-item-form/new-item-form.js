import React, { useState, useContext } from 'react';
import { TODO_ITEM_ADD } from '../../reducers/action-types';
import { ToDoListContext } from '../../contexts';
import './new-item-form.scss';

const NewItemForm = () => {
    const [,todoListItemsDispatch] = useContext(ToDoListContext);
    
    const [newItemState, setNewItemState] = useState({
        item: '',
        error: false,
        errorMessage: ''
    });

    const onItemChange = (e) => {
        setNewItemState({
            ...newItemState,
            item: e.target.value,
            error: false,
            errorMessage: ''
        });
    };

    const onItemSubmit = () => {
        if (newItemState.item.length > 0) {
            submitItemAndClearInputBox();
        } else {
            showError();
        }
    };

    const onKeyDown = (e) => {
        if (e.key !== 'Enter') return;

        if (newItemState.item.length > 0) {
            submitItemAndClearInputBox();
        } else {
            showError();
        }
    };

    const submitItemAndClearInputBox = () => {
        const date = new Date();

        todoListItemsDispatch({
            type: TODO_ITEM_ADD,
            id: date.getTime(),
            message: newItemState.item,
            created: date
        });

        setNewItemState({
            ...newItemState,
            item: '',
            error: false,
            errorMessage: ''
        });
    };

    const showError = () => {
        setNewItemState({
            ...newItemState,
            error: true,
            errorMessage: 'Box cannot be left empty'
        });
    };

    return (
        <div className='form-container'>
            <input 
                className='form-input'
                value={newItemState.item} 
                onChange={onItemChange}
                onKeyDown={onKeyDown} />

            <button 
                className='form-button'
                onClick={onItemSubmit}>Submit</button>

            {
                newItemState.error 
                ? 
                    <div className='form-error-text'>{newItemState.errorMessage}</div>
                :
                   ''
            }
            
        </div>
    )
};

export default NewItemForm;