const uuidv1 = require('uuid/v1');

const todoReducer = (todos, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'DELETE':
            const { deleteTodo } = payload;
            return todos.filter(todo => todo.id !== deleteTodo.id);
        case 'EDIT':
            const { editTodo, editDescription } = payload;
            const editedTodo = { ...editTodo, description: editDescription };
            return todos.map(todo => {
                return todo.id === editTodo.id ? editedTodo : todo
            });
        case 'ADD':
            const { description } = payload;
            const id = uuidv1();
            const newTodo = { id, description, done: false }
            return ([...todos, newTodo]);
        case 'TOGGLE_DONE':
            const { toggleTodo } = payload;
            const toggledTodo = { ...toggleTodo, done: !toggleTodo.done };
            return todos.map(todo => {
                return todo.id === toggleTodo.id ? toggledTodo : todo
            });
        case 'REMOVE_DONE':
            return todos.filter(todo => !todo.done)
        default:
            return todos;
    }
}

export default todoReducer;