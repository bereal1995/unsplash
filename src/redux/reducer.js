import {combineReducers} from 'redux';

import appReducer from './app/redux';
import photoReducer from './photo/redux';



const reducers = combineReducers({
    photo: photoReducer,
    app: appReducer,
});

export default reducers;