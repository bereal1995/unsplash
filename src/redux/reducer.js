import {combineReducers} from 'redux';

import appReducer from './app/redux';
import photoReducer from './photo/redux';
import topicReducer from './topic/redux';



const reducers = combineReducers({
    app: appReducer,
    photo: photoReducer,
    topic: topicReducer,
});

export default reducers;