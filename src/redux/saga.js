import {all} from 'redux-saga/effects'
import todoSaga from './todo/saga';
import photoSaga from './photo/saga';
import appSaga from './app/saga';

function* sagas() {
    yield all([
        todoSaga(),
        photoSaga(),
        appSaga(),
    ])
}

export default sagas;