import {all} from 'redux-saga/effects'
import photoSaga from './photo/saga';
import appSaga from './app/saga';
import topicSaga from './topic/saga';

function* sagas() {
    yield all([
        appSaga(),
        photoSaga(),
        topicSaga(),
    ])
}

export default sagas;