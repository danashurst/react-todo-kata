import React, { useState } from 'react';
import ItemActions from '../item-actions/item-actions';

const ItemMessage = ({item, onUpdate, onDelete, onEdit}) => {
    const [state, setState] = useState(item.message);

    const onChange = (e) => {
        setState(e.target.value);
    };

    const onUpdateClick = () => {
        onUpdate(item, state);
    };

    const onDeleteClick = () => {
        onDelete(item.id);
    };

    const onEditClick = (itemId) => {
        onEdit(itemId);
    };

    return (
        <React.Fragment>
            {
                item.isEditing 
                ?
                    <input className='item-message' onChange={onChange} value={state} />
                :
                    <div className="item-message">{item.message}</div>
            }

            <ItemActions 
                item={item}
                onUpdate={onUpdateClick}
                onDelete={onDeleteClick}
                onEdit={onEditClick} />
        </React.Fragment>
    )
};

export default ItemMessage;