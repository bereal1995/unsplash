import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_RELATED_LIST, function* ({id, payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.getRelatedCollection,id, payload)
            console.log('@@CollectionResult',result);
            if (result.data) {
                yield put(Action.Creators.updateState({
                    relatedList: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

    ])
}