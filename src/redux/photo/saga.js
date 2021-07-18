import {all, call, put, takeLatest, select} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.FETCH_PHOTOS, function* ({data}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));

            const {photo} = yield select();

            const result = yield call(Api.fetchPhoto, {
                ...data,
                page: photo.currentPage
            })

            yield put(Action.Creators.updateState({
                currentPage: photo.currentPage+1,
                list: [
                    ...photo.list,
                    ...result
                ]
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
                search: {
                    query: data.query,
                    currentPage: data.page+1,
                    results: result.results,
                }
            }))
            yield put(AppAction.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS_RELATED, function* ({data}) {

            const result = yield call(Api.searchPhotoRelated, data);

            yield put(Action.Creators.updateState({
                searchRelated: result.related_searches,
            }))
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS_MORE, function* ({data}) { // 3가지 기
            const {photo} = yield select();

            const result = yield call(Api.searchPhoto, {
                query: photo.search.query,
                per_page: data.per_page,
                page: photo.search.currentPage
            });
            yield put(Action.Creators.updateState({
                search: {
                    query: photo.search.query,
                    currentPage: photo.search.currentPage+1,
                    ...result,
                    results: [
                        ...photo.search.results,
                        ...result.results
                    ]
                }
            }))
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

        takeLatest(Action.Types.GET_ME, function* () {
            const result = yield call(Api.getMe)
            yield put(Action.Creators.updateState({
                me: result,
            }))
        }),

        takeLatest(Action.Types.LIKE_PHOTO, function* ({id}) {
            yield call(Api.likePhoto, id)
        }),

        takeLatest(Action.Types.UNLIKE_PHOTO, function* ({id}) {
            yield call(Api.unlikePhoto, id)
        }),

        takeLatest(Action.Types.LIKED_PHOTOS, function* ({username}) {
            const result = yield call(Api.likedPhotos, username)

            yield put(Action.Creators.updateState({
                likedPhotos: result,
            }))
        }),

    ])
}

export default saga;