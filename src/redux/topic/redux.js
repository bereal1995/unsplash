import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
}

export const Action = createActions({
    updateState: ['payload'],
    fetchTopics: ['payload'],
}, {
    prefix: 'TOPIC/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});