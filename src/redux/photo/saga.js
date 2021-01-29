import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.FETCH_PHOTOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.fetchPhoto, data)
            yield put(Action.Creators.updateState({
                list: result
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.FETCH_PHOTO_BY_ID, function* ({data}) {
            const result = yield call(Api.fetchPhotoById, data)
            yield put(Action.Creators.updateState({
                popupPhoto: result,
            }))
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.searchPhoto, data);
            yield put(Action.Creators.updateState({
                search: result
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),

        takeLatest(Action.Types.RELATED_PHOTOS, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.relatedPhotos, id);
            yield put(Action.Creators.updateState({
                relatedPhotos: result.results,
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),

        takeLatest(Action.Types.GET_RANDOM_PHOTO, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const {photo} = yield select();
            
            if ( typeof photo.visualPhoto.id === 'undefined') {
                const result = yield call(Api.getRandomPhoto, data);

                yield put(Action.Creators.updateState({
                    visualPhoto: result
                }))
            }
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),
    ])
}

export default saga;