import {all, takeLatest, call, put, select} from 'redux-saga/effects'
import {Action} from "./reducer";
import Api from "../api";


function* saga() {
    yield all([
        takeLatest(Action.Types.FETCH_TODOS, function* () {
            // 로딩시작
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.fetchTodos)
            console.log(result);

            if(result.data) {
                yield put(Action.Creators.updateState({
                    todos: result.data
                }))
            }

            yield put(Action.Creators.updateState({isLoading:false}));

        }),
        takeLatest(Action.Types.ADD_TODO, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));


            const result = yield call(Api.addTodo, {
                title: payload
            })
            console.log(result);
            const state = yield select();
            yield put(Action.Creators.updateState({isLoading:false, triggerUpdate: !state.triggerUpdate}));

        }),
        takeLatest(Action.Types.DELETE_TODO, function* ({id}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.deleteTodo, id);
            console.log('deleteTodo test',result);
            const state = yield select();
            yield put(Action.Creators.updateState({isLoading:false, triggerUpdate: !state.triggerUpdate}));

        }),

        takeLatest(Action.Types.FETCH_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.fetchPhoto, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    photos: result.data
                }))
            }

            yield put(Action.Creators.updateState({isLoading:false}));
        }),

        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.searchPhoto, payload);
            if (result.data.results) {
                yield put(Action.Creators.updateState({
                    photos: result.data.results
                }))
            }

            yield put(Action.Creators.updateState({isLoading:false}));

        }),

    ])
}

export default saga;