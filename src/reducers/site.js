import { 
    SITE_SET_TITLE
} from './action-types';

export const siteInitialState = {
    title: 'React Interview Test'
};

export default (state = siteInitialState, action) => {
    switch (action) {
        case SITE_SET_TITLE: {
            return {
                ...state,
                title: action.title
            }
        }

        default: {
            return state;
        }
    }
}