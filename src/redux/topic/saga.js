import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_TOPICS, function* ({payload}) {
            const result = yield call(Api.fetchTopics, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    headerList: result.data
                }))
            }
        }),
        takeLatest(Action.Types.SEARCH_TOPICS, function* ({id,payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.searchTopics, id,payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

    ])
}