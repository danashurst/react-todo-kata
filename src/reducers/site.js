const initialState = {
    title: 'React Interview Test'
};

export default (state = initialState, action) => {
    if (action.type === 'SET_TITLE') {
        return {
            ...state,
            title: action.title
        }
    }

    return state;
}