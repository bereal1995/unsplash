import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchPhoto, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));
            const result = yield call(Api.searchPhoto, payload);
            if (result.data.results) {
                yield put(Action.Creators.updateState({
                    search: result.data
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));

        }),
    ])
}