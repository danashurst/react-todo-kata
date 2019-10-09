import React, { useReducer } from 'react';
import NewItemForm from './new-item-form/new-item-form';
import ItemList from './item-list/item-list';
import { ToDoListContext } from '../contexts';
import todoItemsReducer, { todoItemsInitialState } from '../reducers/todo-items';

const ToDo = () => {
    return (
        <ToDoListContext.Provider value={useReducer(todoItemsReducer, todoItemsInitialState)}>
            <ItemList />
            <NewItemForm />
        </ToDoListContext.Provider>
    )
};

export default ToDo;