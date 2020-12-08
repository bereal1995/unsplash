import {all} from 'redux-saga/effects'
import photoSaga from './photo/saga';
import appSaga from './app/saga';
import topicSaga from './topic/saga';
import userSaga from './user/saga';
import collectionSaga from './collection/saga';

function* sagas() {
    yield all([
        appSaga(),
        photoSaga(),
        topicSaga(),
        userSaga(),
        collectionSaga(),
    ])
}

export default sagas;