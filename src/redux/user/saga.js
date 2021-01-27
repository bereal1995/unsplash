import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_USER_PHOTO, function* ({id, data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchUserPhoto, id, data)
            if (result?.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),
        takeLatest(Action.Types.GET_USER_PROFILE, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.getUserProfile, id)
            if (result?.data) {
                yield put(Action.Creators.updateState({
                    profile: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),
    ])
}   