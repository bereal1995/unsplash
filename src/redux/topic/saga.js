import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_TOPICS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.fetchTopics, payload)
            console.log('@@result',result);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));
        }),

    ])
}