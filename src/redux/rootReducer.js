import { combineReducers } from 'redux';
import randomPeopleReducer from './randomPeople/randomPeople.reducer';

const rootReducer = combineReducers({
    randomPeopleData: randomPeopleReducer,
});

export default rootReducer;