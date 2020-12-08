import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_REALTED_LIST, function* ({payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.getRelatedCollection, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    relatedList: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

    ])
}