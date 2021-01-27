import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_PHOTOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchPhoto, data)
                yield put(Action.Creators.updateState({
                    list: 'aa'
                }))
            console.log('@@result fetchPhoto',result);
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.FETCH_PHOTO_BY_ID, function* ({data}) {
            const result = yield call(Api.fetchPhotoById, data)
            if (result?.data) {
                yield put(Action.Creators.updateState({
                    popupPhoto: result,
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.searchPhoto, data);
            if (result.data.results) {
                yield put(Action.Creators.updateState({
                    search: result
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),

        takeLatest(Action.Types.RELATED_PHOTOS, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.relatedPhotos, id);
            if (result?.data?.results) {
                yield put(Action.Creators.updateState({
                    relatedPhotos: result.results,
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),
    ])
}