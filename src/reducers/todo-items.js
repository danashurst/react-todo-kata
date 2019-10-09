import {
    TODO_ITEM_ADD,
    TODO_ITEM_REMOVE,
    TODO_ITEM_EDIT,
    TODO_ITEM_UPDATE
} from './action-types';

export const todoItemsInitialState = [];

export default (state = todoItemsInitialState, action) => {
    switch (action.type) {
        case TODO_ITEM_ADD: {
            const newState = [
                ...state, {
                    id: action.id,
                    message: action.message,
                    created: action.created,
                    isEditing: false
                }
            ];

            return newState;
        }

        case TODO_ITEM_EDIT: {
            return state.map((item) => {
                if (item.id === action.id) {
                    item.isEditing = true;
                } 

                return item;
            });
        }

        case TODO_ITEM_REMOVE: {
            return state.filter(item => item.id !== action.id);
        }

        case TODO_ITEM_UPDATE: {
            return state.map((item) => {
                if (item.id === action.id) {
                    item.message = action.message;
                    item.isEditing = false;
                } 

                return item;
            }); 
        }

        default: {
            return state;
        }
    }
}