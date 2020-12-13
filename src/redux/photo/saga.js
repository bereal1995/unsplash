import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_PHOTOS, function* ({payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchPhoto, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.FETCH_PHOTO_BY_ID, function* ({payload}) {
            const result = yield call(Api.fetchPhotoById, payload)
            if (result?.data) {
                yield put(Action.Creators.updateState({
                    popupPhoto: result.data,
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.searchPhoto, payload);
            if (result.data.results) {
                yield put(Action.Creators.updateState({
                    search: result.data
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),

        takeLatest(Action.Types.RELATED_PHOTOS, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.relatedPhotos, id);
            if (result?.data?.results) {
                yield put(Action.Creators.updateState({
                    relatedPhotos: result.data.results,
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),
    ])
}