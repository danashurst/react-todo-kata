const uuidv1 = require('uuid/v1');

export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE_TASK = 'TODO_DELETE_TASK';
export const TODO_EDIT = 'TODO_EDIT';
export const TODO_DELETE_DONE = 'TODO_DELETE_DONE';
export const TODO_TOGGLE_DONE = 'TODO_TOGGLE_DONE';

const todoReducer = (todos, action) => {
    const { type, payload } = action;

    switch (type) {
        case TODO_DELETE_TASK:
            const { deleteTodo } = payload;
            return todos.filter(todo => todo.id !== deleteTodo.id);

        case TODO_EDIT:
            const { editTodo, editDescription } = payload;
            const editedTodo = { ...editTodo, description: editDescription };
            return todos.map(todo => {
                return todo.id === editTodo.id ? editedTodo : todo
            });

        case TODO_ADD:
            const { description } = payload;
            const id = uuidv1();
            const newTodo = { id, description, done: false }
            return ([...todos, newTodo]);

        case TODO_TOGGLE_DONE:
            const { toggleTodo } = payload;
            const toggledTodo = { ...toggleTodo, done: !toggleTodo.done };
            return todos.map(todo => {
                return todo.id === toggleTodo.id ? toggledTodo : todo
            });

        case TODO_DELETE_DONE:
            return todos.filter(todo => !todo.done)

        default:
            return todos;
    }
}

export default todoReducer;