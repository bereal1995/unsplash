import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: [],
    detail: {},
}

export const Action = createActions({
    updateState: ['payload'],
    fetchTodos: null,
    fetchTodoById: ['payload'],
    addTodo: ['payload'],
    updateTodo: ['id', 'payload'],
    deleteTodo: ['id'],
    triggerUpdate: ['payload'],
}, {
    prefix: 'TODO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});