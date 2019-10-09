import React, { useState } from 'react';
import ItemActions from '../item-actions/item-actions';
import './item-message.scss';

const ItemMessage = ({
    item, 
    onUpdate, 
    onUpdateCancel, 
    onDelete, 
    onEdit, 
    onComplete
}) => {
    const [state, setState] = useState(item.message);

    const onChange = (e) => {
        setState(e.target.value);
    };

    const onUpdateClick = () => {
        onUpdate(item, state);
    };

    const onUpdateCancelClick = (itemId) => {
        onUpdateCancel(itemId);
    };

    const onDeleteClick = () => {
        onDelete(item.id);
    };

    const onEditClick = (itemId) => {
        onEdit(itemId);
    };

    const onCompletedClick = (itemId, completed) => {
        onComplete(itemId, completed);
    };

    return (
        <React.Fragment>
            {
                item.isEditing 
                ?
                    <input className='item-message' onChange={onChange} value={state} />
                :
                    <div className={`${item.completed ? 'item-message-complete' : 'item-message'}`}>{item.message}</div>
            }

            <ItemActions 
                item={item}
                onUpdate={onUpdateClick}
                onUpdateCancel={onUpdateCancelClick}
                onDelete={onDeleteClick}
                onEdit={onEditClick}
                onComplete={onCompletedClick} />
        </React.Fragment>
    )
};

export default ItemMessage;