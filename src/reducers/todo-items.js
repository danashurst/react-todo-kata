import {
    TODO_ITEM_ADD,
    TODO_ITEM_REMOVE,
    TODO_ITEM_EDIT,
    TODO_ITEM_UPDATE,
    TODO_ITEM_COMPLETED,
    TODO_ITEM_UPDATE_CANCEL
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
                    isEditing: false,
                    completed: false
                }
            ];

            return newState;
        }

        case TODO_ITEM_EDIT: {
            return state.map((item) => ({ 
                ...item, 
                isEditing: (item.id === action.id)
            }));
        }

        case TODO_ITEM_REMOVE: {
            return state.filter(item => item.id !== action.id);
        }

        case TODO_ITEM_UPDATE: {
            return state.map((item) => {
                return (item.id !== action.id) ? item : {
                    ...item,
                    message: action.message,
                    isEditing: false
                };
            }); 
        }

        case TODO_ITEM_UPDATE_CANCEL: {
            return state.map((item) => {
                if (item.id === action.id) {
                    item.isEditing = false;
                } 

                return item;
            }); 
        }

        case TODO_ITEM_COMPLETED: {
            return state.map((item) => {
                if (item.id === action.id) {
                    item.completed = action.completed;
                } 

                return item;
            }); 
        }

        default: {
            return state;
        }
    }
}