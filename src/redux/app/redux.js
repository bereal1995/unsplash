import {createActions, createReducer} from "reduxsauce";

const initialState = {
    sidebar: false,
    popup: {
        title: '',
        content: ''
    },
    users: [],
    isLoading: false,
}

export const Action = createActions({
    updateState: ['payload'],
}, {
    prefix: 'APP/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});