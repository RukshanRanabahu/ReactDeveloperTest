import { combineReducers } from 'redux';
import imageReducer from './imageFilter/imageFilter.reducer';

const rootReducer = combineReducers({
    peopleList: imageReducer,
});

export default rootReducer;