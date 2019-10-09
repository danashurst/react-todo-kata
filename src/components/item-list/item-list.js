import React, { useContext } from 'react';
import { ToDoListContext } from '../../contexts';
import { 
    TODO_ITEM_REMOVE, 
    TODO_ITEM_UPDATE,
    TODO_ITEM_EDIT,
    TODO_ITEM_COMPLETED
} from '../../reducers/action-types';
import ItemMessage from '../item-message/item-message';
import './item-list.scss';

const ItemList = () => {
    const [todoItemsListState, todoItemsListDispatch] = useContext(ToDoListContext);

    const onDelete = (itemId) => {
        todoItemsListDispatch({
            type: TODO_ITEM_REMOVE,
            id: itemId
        });
    };

    const onUpdate = (item, message) => {
        todoItemsListDispatch({
            type: TODO_ITEM_UPDATE,
            id: item.id,
            message
        });
    };

    const onEdit = (itemId) => {
        todoItemsListDispatch({
            type: TODO_ITEM_EDIT,
            id: itemId
        });
    };

    const onComplete = (itemId, completed) => {
        todoItemsListDispatch({
            type: TODO_ITEM_COMPLETED,
            id: itemId,
            completed
        });
    };
    
    return (
        todoItemsListState.map((item, index) => {
            return (
                <div className={`${item.completed ? 'item-container-completed' : 'item-container'}`} key={index}>
                    <ItemMessage 
                        item={item} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onComplete={onComplete} />
                    <div className='item-created'>{item.created.toGMTString()}</div>
                </div>
            )
        })
    )
};

export default ItemList;