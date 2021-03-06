import {combineReducers} from 'redux';

import authReducer from './auth';
import movieReducer from './movie';
import transactionReducer from './transaction';

const reducers = combineReducers({
    auth: authReducer,
    movie: movieReducer,
    transaction: transactionReducer,
});

export default reducers;
