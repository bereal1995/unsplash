import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.FETCH_USER_PHOTO, function* ({id, data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchUserPhoto, id, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),
        takeLatest(Action.Types.GET_USER_PROFILE, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.getUserProfile, id)
            yield put(Action.Creators.updateState({
                profile: result
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),
    ])
}

export default saga;