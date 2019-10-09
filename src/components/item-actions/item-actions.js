import React from 'react';

const ItemActions = ({item, onUpdate, onEdit, onDelete}) => {
    const onUpdateClick = (itemId) => {
        onUpdate(itemId);
    };

    const onDeleteClick = (itemId) => {
        onDelete(itemId);
    };

    const onEditClick = (itemId) => {
        onEdit(itemId);
    };

    return (
        <div className='item-change-container'>
            {
                item.isEditing ?
                <button className='item-change-update' onClick={() => onUpdateClick(item.id)}>Update</button>
            : 
                <button className='item-change-edit' onClick={() => onEditClick(item.id)}>Edit</button>
            }

            <button className='item-change-delete' onClick={() => onDeleteClick(item.id)}>Delete</button>
        </div>
    )
};

export default ItemActions;