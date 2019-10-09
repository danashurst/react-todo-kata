const todoRecucer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return;
        case 'EDIT':
            return;
        case 'ADD':
                setItems([...items, newItem]);
            return;
        default:
            return state;
    }
}

export default todoRecucer;