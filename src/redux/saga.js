import {all} from 'redux-saga/effects'
import photoSaga from './photo/saga';
import appSaga from './app/saga';

function* sagas() {
    yield all([
        photoSaga(),
        appSaga(),
    ])
}

export default sagas;