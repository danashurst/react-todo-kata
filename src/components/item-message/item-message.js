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
    const [newMessage, setNewMessage] = useState(item.message);

    const onChange = (e) => {
        setNewMessage(e.target.value);
    };

    const onUpdateClick = () => {
        onUpdate(item, newMessage);
    };

    return (
        <React.Fragment>
            {
                item.isEditing 
                ?
                    <input className='item-message' onChange={onChange} value={newMessage} />
                :
                    <div className={`${item.completed ? 'item-message-complete' : 'item-message'}`}>{item.message}</div>
            }

            <ItemActions 
                item={item}
                onUpdate={onUpdateClick}
                onUpdateCancel={onUpdateCancel}
                onDelete={onDelete}
                onEdit={onEdit}
                onComplete={onComplete} />
        </React.Fragment>
    )
};

export default ItemMessage;