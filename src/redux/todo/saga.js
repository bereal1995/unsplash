import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";
import {navigate} from "../../lib/History";
import _ from "lodash";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_TODOS, function* () {

            const result = yield call(Api.fetchTodos)
            console.log(result);

            if(result.data) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }

        }),
        takeLatest(Action.Types.FETCH_TODO_BY_ID, function* ({payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));

            const result = yield call(Api.fetchTodoById, payload)
            if (result?.data) {
                const state = yield select();
                yield put(Action.Creators.updateState({
                    detail: {
                        ...state.todo.detail,
                        [result.data._id]: result.data
                    }
                }))
            }

            yield put(AppAction.Creators.updateState({isLoading:false}));

        }),
        takeLatest(Action.Types.ADD_TODO, function* ({payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.addTodo, payload)
            const state = yield select();
            yield put(Action.Creators.updateState({triggerUpdate: !state.triggerUpdate}));
            yield put(AppAction.Creators.updateState({isLoading:false}));

            navigate('/todos')
        }),
        takeLatest(Action.Types.DELETE_TODO, function* ({id}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));
            const result = yield call(Api.deleteTodo, id);
            const state = yield select();
            yield put(Action.Creators.updateState({triggerUpdate: !state.todo.triggerUpdate}));
            yield put(AppAction.Creators.updateState({isLoading:false}))

        }),
        takeLatest(Action.Types.UPDATE_TODO, function* ({id, payload}) {
            yield put(AppAction.Creators.updateState({isLoading:true}));

            const result = yield call(Api.updateTodo, id, payload)
            console.log(result);
            const {todo} = yield select();
            yield put(Action.Creators.updateState({detail: _.omit(todo.detail, id)}));
            yield put(AppAction.Creators.updateState({isLoading:false}));
            navigate(`/todos/detail/${id}`)
        }),
    ])
}