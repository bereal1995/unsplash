import {all, call} from 'redux-saga/effects'
import photoSaga from './photo/saga';
import appSaga from './app/saga';
import topicSaga from './topic/saga';
import userSaga from './user/saga';
import collectionSaga from './collection/saga';

function* sagas() {
    yield all([
        call(appSaga),
        call(photoSaga),
        call(topicSaga),
        call(userSaga),
        call(collectionSaga),
    ])
}

export default sagas;