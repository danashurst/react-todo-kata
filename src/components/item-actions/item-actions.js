import React from 'react';
import './item-actions.scss';

const ItemActions = ({item, onUpdate, onEdit, onDelete, onComplete}) => {
    const onUpdateClick = (itemId) => {
        onUpdate(itemId);
    };

    const onDeleteClick = (itemId) => {
        onDelete(itemId);
    };

    const onEditClick = (itemId) => {
        onEdit(itemId);
    };

    const onCompleteClick = (e, itemId) => {
        onComplete(itemId, e.target.checked);
    };

    return (
        <div className='item-change-container'>
            {item.completed ? 'Mark as unfinished' : 'Mark as finished'}
            <input 
                type='checkbox' 
                onChange={(e) => onCompleteClick(e, item.id)}
                value={item.completed} />
                
            {
                item.isEditing ?
                <button 
                    className='item-change-update' 
                    onClick={() => onUpdateClick(item.id)}>Update</button>
            : 
                <button 
                    className='item-change-edit' 
                    onClick={() => onEditClick(item.id)}>Edit</button>
            }

            <button className='item-change-delete' onClick={() => onDeleteClick(item.id)}>Delete</button>
        </div>
    )
};

export default ItemActions;