import {combineReducers} from 'redux';

import appReducer from './app/redux';
import todoReducer from './todo/redux';
import photoReducer from './photo/redux';



const reducers = combineReducers({
    todo: todoReducer,
    photo: photoReducer,
    app: appReducer,
});

export default reducers;