import {combineReducers} from 'redux';

import authReducer from './auth';
import movieReducer from './movie';

const reducers = combineReducers({
    auth: authReducer,
    movie: movieReducer,
});

export default reducers;
