import {
    RANDOM_PEOPLE_LIST,
    RANDOM_PEOPLE_LIST_CLEAR
} from './imageFilter.types';

const INITIAL_STATE = {
    random_people_data_list: [],
};

const imageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RANDOM_PEOPLE_LIST:
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
            return {
                ...state,
                random_people_data_list: action.payload,
            };
        case RANDOM_PEOPLE_LIST_CLEAR:
            return {
                ...state,
                random_people_data_list: [],
            };
        default: return state;
    }
};

export default imageReducer;