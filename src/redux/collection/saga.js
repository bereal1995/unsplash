import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_RELATED_LIST, function* ({id, data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.getRelatedCollection,id, data)
            yield put(Action.Creators.updateState({
                relatedList: result
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

    ])
}

export default saga;