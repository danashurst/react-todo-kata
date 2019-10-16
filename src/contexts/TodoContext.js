import { createContext } from 'react';

const TodoContext = createContext('');
export const TodoProvider = TodoContext.Provider;

export default TodoContext;