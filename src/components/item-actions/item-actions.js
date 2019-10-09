import React from 'react';
import './item-actions.scss';

const ItemActions = ({
    item, 
    onUpdate, 
    onUpdateCancel, 
    onEdit, 
    onDelete, 
    onComplete
}) => {
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
                item.isEditing ? (
                    <React.Fragment>
                        <button 
                            className='item-change-update' 
                            onClick={() => onUpdate(item.id)}>Update</button>

                        <button 
                            className='item-change-update-cancel' 
                            onClick={() => onUpdateCancel(item.id)}>Cancel</button>
                    </React.Fragment>
                )
            : 
                <button 
                    className='item-change-edit' 
                    onClick={() => onEdit(item.id)}>Edit</button>
            }

            <button className='item-change-delete' onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    )
};

export default ItemActions;