import {
    RANDOM_PEOPLE_LIST,
    RANDOM_PEOPLE_LIST_CLEAR,
    RANDOM_AGE_LIST,
    RANDOM_AGE_LIST_CLEAR,
} from './randomPeople.types';

const INITIAL_STATE = {
    random_people_data: [],
    random_age_data: [],
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
        case RANDOM_AGE_LIST:
            return {
                ...state,
                random_age_data: action.payload,
            };
        case RANDOM_AGE_LIST_CLEAR:
            return {
                ...state,
                random_age_data: [],
            };
        default: return state;
    }
};

export default imageReducer;