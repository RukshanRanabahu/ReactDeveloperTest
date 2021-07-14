import {
    RANDOM_PEOPLE_LIST,
    RANDOM_PEOPLE_LIST_CLEAR,
} from './imageFilter.types';

const INITIAL_STATE = {
    random_people_data: [],
};

const imageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RANDOM_PEOPLE_LIST:
            return {
                ...state,
                random_people_data: action.payload,
            };
        case RANDOM_PEOPLE_LIST_CLEAR:
            return {
                ...state,
                random_people_data: [],
            };
        default: return state;
    }
};

export default imageReducer;