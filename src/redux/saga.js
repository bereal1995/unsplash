import {all, takeLatest, call, put, select} from 'redux-saga/effects'
import {Action} from "./reducer";
import Api from "../api";
import History, {navigate} from "../lib/History";


function* saga() {
    yield all([
        takeLatest(Action.Types.FETCH_TODOS, function* () {

            const result = yield call(Api.fetchTodos)
            console.log(result);

            if(result.data) {
                yield put(Action.Creators.updateState({
                    todos: result.data
                }))
            }

        }),
        takeLatest(Action.Types.ADD_TODO, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));
            const result = yield call(Api.addTodo, payload)
            console.log(result);
            const state = yield select();
            yield put(Action.Creators.updateState({isLoading:false, triggerUpdate: !state.triggerUpdate}));
            navigate('/todos')
        }),
        takeLatest(Action.Types.DELETE_TODO, function* ({id}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.deleteTodo, id);
            console.log('deleteTodo test',result);
            const state = yield select();
            yield put(Action.Creators.updateState({isLoading:false, triggerUpdate: !state.triggerUpdate}));

        }),
        takeLatest(Action.Types.FETCH_TODO_BY_ID, function* ({payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.fetchTodoById, payload)
            if (result?.data) {
                const state = yield select();
                yield put(Action.Creators.updateState({
                    todoDetail: {
                        ...state.todoDetail,
                        [result.data._id]: result.data
                    }
                }))
            }

            yield put(Action.Creators.updateState({isLoading:false}));

        }),
        takeLatest(Action.Types.UPDATE_TODO, function* ({id, payload}) {
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(Api.updateTodo, id, payload)
            console.log(result);
            const {todoDetail} = yield select();
            todoDetail[id] = undefined;
            yield put(Action.Creators.updateState({
                isLoading:false,
                todoDetail
            }));
            navigate(`/todos/detail/${id}`)
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